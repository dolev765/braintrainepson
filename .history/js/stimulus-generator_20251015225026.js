// Stimulus Generator - Handles generation of number and semantic stimuli

import { numberData, semanticData, formatCombinations, SEMANTIC_RULES } from './config.js';
import { gameState } from './game-state.js';

export class StimulusGenerator {
  constructor() {
    this.formatUsage = {
      arabic: 0,
      word: 0,
      roman: 0
    };
  }

  // Reset format usage tracking
  resetFormatUsage() {
    this.formatUsage = {
      arabic: 0,
      word: 0,
      roman: 0
    };
  }

  // Generate semantic stimulus
  generateSemanticStimulus() {
    const category = gameState.nextSemanticCategory;
    const arr = semanticData[category];
    const isSameTrial = gameState.trialTypes[gameState.trialCount];
    const idx = Math.floor(Math.random() * 10) + (isSameTrial ? 0 : 10);
    const pair = arr[idx];

    return {
      item1: { value: pair[0], format: 'semantic', index: idx },
      item2: { value: pair[1], format: 'semantic', index: idx },
      sameFormat: false,
      sameMeaning: isSameTrial
    };
  }

  // Generate number stimulus
  generateNumberStimulus() {
    const formatEntries = Object.entries(this.formatUsage);
    formatEntries.sort((a, b) => a[1] - b[1]);
    
    const leastUsedFormat = formatEntries[0][0];
    const eligibleCombinations = formatCombinations.filter(combo => 
      combo.formats.includes(leastUsedFormat)
    );
    
    const selectedCombination = eligibleCombinations[
      Math.floor(Math.random() * eligibleCombinations.length)
    ];
    
    const isSameTrial = gameState.trialTypes[gameState.trialCount];
    
    if (gameState.currentRule === 1) {
      return this.generatePhysicalPropertyStimulus(selectedCombination, leastUsedFormat, isSameTrial);
    } else {
      return this.generateMeaningStimulus(selectedCombination, leastUsedFormat, isSameTrial);
    }
  }

  // Generate stimulus for physical property rule
  generatePhysicalPropertyStimulus(combination, leastUsedFormat, isSameTrial) {
    if (isSameTrial) {
      // Same format trial
      const format = combination.formats.includes(leastUsedFormat) ? 
        leastUsedFormat : 
        combination.formats[Math.floor(Math.random() * 2)];
      
      this.formatUsage[format] += 2;
      
      const index1 = Math.floor(Math.random() * gameState.numberRange);
      let index2;
      do {
        index2 = Math.floor(Math.random() * gameState.numberRange);
      } while (index1 === index2 && gameState.currentRule === 2);
      
      return {
        item1: { value: numberData[format][index1], format, index: index1 },
        item2: { value: numberData[format][index2], format, index: index2 },
        sameFormat: true,
        sameMeaning: index1 === index2
      };
    } else {
      // Different format trial
      const format1 = combination.formats[0];
      const format2 = combination.formats[1];
      this.formatUsage[format1]++;
      this.formatUsage[format2]++;
      
      const index1 = Math.floor(Math.random() * gameState.numberRange);
      const index2 = Math.floor(Math.random() * gameState.numberRange);
      
      return {
        item1: { value: numberData[format1][index1], format: format1, index: index1 },
        item2: { value: numberData[format2][index2], format: format2, index: index2 },
        sameFormat: false,
        sameMeaning: index1 === index2
      };
    }
  }

  // Generate stimulus for meaning rule
  generateMeaningStimulus(combination, leastUsedFormat, isSameTrial) {
    if (isSameTrial) {
      // Same meaning trial
      const index = Math.floor(Math.random() * gameState.numberRange);
      const format1 = combination.formats[0];
      const format2 = combination.formats[1];
      this.formatUsage[format1]++;
      this.formatUsage[format2]++;
      
      return {
        item1: { value: numberData[format1][index], format: format1, index },
        item2: { value: numberData[format2][index], format: format2, index },
        sameFormat: false,
        sameMeaning: true
      };
    } else {
      // Different meaning trial
      const format1 = this.formatUsage[leastUsedFormat] === Math.min(...Object.values(this.formatUsage)) ? 
        leastUsedFormat : 
        Object.keys(this.formatUsage)[Math.floor(Math.random() * Object.keys(this.formatUsage).length)];
      
      const format2 = formatCombinations.find(combo => combo.formats.includes(format1))
        ?.formats.find(f => f !== format1) || 
        Object.keys(this.formatUsage).find(f => f !== format1);
      
      this.formatUsage[format1]++;
      this.formatUsage[format2]++;
      
      let index1 = Math.floor(Math.random() * gameState.numberRange);
      let index2;
      do {
        index2 = Math.floor(Math.random() * gameState.numberRange);
      } while (index1 === index2);
      
      return {
        item1: { value: numberData[format1][index1], format: format1, index: index1 },
        item2: { value: numberData[format2][index2], format: format2, index: index2 },
        sameFormat: format1 === format2,
        sameMeaning: false
      };
    }
  }

  // Select random rule and prepare next trial
  selectRandomRule() {
    // Decide upcoming trial type BEFORE showing the rule screen
    if (gameState.modeType === 'multi') {
      gameState.nextUseSemantic = (Math.random() < 0.5);
    } else {
      gameState.nextUseSemantic = false;
    }
    
    if (gameState.nextUseSemantic) {
      gameState.currentStimulusType = 'semantic';
      const enabledCategories = Object.keys(semanticData).filter(cat => {
        const tier = SEMANTIC_RULES[cat].tier;
        return gameState.enabledSemanticTiers[`tier${tier}`];
      });
      gameState.nextSemanticCategory = enabledCategories[Math.floor(Math.random() * enabledCategories.length)];
      gameState.currentSemanticCategory = gameState.nextSemanticCategory;
      // For semantic, we always use relationship-based decision; set numeric rule to Meaning for compatibility
      gameState.currentRule = 2;
    } else {
      gameState.currentStimulusType = 'numbers';
      gameState.currentSemanticCategory = null;
      gameState.nextSemanticCategory = null;
      gameState.currentRule = Math.random() < 0.5 ? 1 : 2;
    }
  }

  // Generate the next stimulus
  generateStimulus() {
    if (gameState.nextUseSemantic) {
      gameState.currentRule = 2;
      gameState.currentStimulusType = 'semantic';
      gameState.currentSemanticCategory = gameState.nextSemanticCategory;
      gameState.currentPair = this.generateSemanticStimulus();
    } else {
      gameState.currentStimulusType = 'numbers';
      gameState.currentSemanticCategory = null;
      gameState.nextSemanticCategory = null;
      gameState.currentPair = this.generateNumberStimulus();
    }
    
    return gameState.currentPair;
  }

  // Get rule display information
  getRuleDisplay() {
    if (gameState.currentStimulusType === 'numbers' || gameState.modeType !== 'multi') {
      if (gameState.currentRule === 1) {
        return {
          title: "Physical Property Rule",
          description: "Press 'J' if items have the same format, press 'F' if they have different formats."
        };
      } else {
        return {
          title: "Meaning Rule",
          description: "Press 'J' if items represent the same number, press 'F' if they represent different numbers."
        };
      }
    }
    
    // Semantic category rules
    const category = gameState.currentSemanticCategory;
    const rule = SEMANTIC_RULES[category];
    
    return {
      title: rule.title,
      description: rule.description
    };
  }
}

// Create global stimulus generator instance
export const stimulusGenerator = new StimulusGenerator();
