// Stimulus Generator - Handles generation of number and semantic stimuli

import { numberData, semanticData, formatCombinations, SEMANTIC_RULES } from './config/index.js';
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
    const isSameTrial = gameState.getNextTrialType();
    
    // Bug fix: Check if trialTypes array has enough elements
    if (!gameState.trialTypes || gameState.trialCount >= gameState.trialTypes.length) {
      console.error('Trial types array is empty or trial count exceeds array length');
      return null;
    }
    
    // Bug fix: Check if array is empty
    if (!arr || arr.length === 0) {
      console.error('Semantic category array is empty or undefined:', category);
      return null;
    }
    
    // Find the split point between related and unrelated pairs
    // Look for the "Unrelated pairs" comment to find where unrelated pairs start
    let splitIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string' && arr[i].includes('Unrelated pairs')) {
        splitIndex = i + 1;
        break;
      }
    }
    
    // If no split found, assume half are related, half are unrelated
    if (splitIndex === 0) {
      splitIndex = Math.floor(arr.length / 2);
    }
    
    // Bug fix: Ensure splitIndex is valid
    if (splitIndex <= 0 || splitIndex >= arr.length) {
      console.error('Invalid split index for semantic category:', category, 'splitIndex:', splitIndex, 'arr.length:', arr.length);
      return null;
    }
    
    let idx;
    if (isSameTrial) {
      // Select from related pairs (first half)
      idx = Math.floor(Math.random() * splitIndex);
    } else {
      // Select from unrelated pairs (second half)
      idx = splitIndex + Math.floor(Math.random() * (arr.length - splitIndex));
    }
    
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
    
    const isSameTrial = gameState.getNextTrialType();
    console.log(`DEBUG: Trial ${gameState.trialCount}, isSameTrial: ${isSameTrial}, rule: ${gameState.currentRule}`);
    
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
      let attempts = 0;
      const maxAttempts = 100; // Prevent infinite loop
      do {
        index2 = Math.floor(Math.random() * gameState.numberRange);
        attempts++;
      } while (index1 === index2 && gameState.currentRule === 2 && attempts < maxAttempts);
      
      // Bug fix: If we couldn't find different indices and range is too small, use same index
      if (attempts >= maxAttempts && gameState.numberRange <= 1) {
        index2 = index1;
      }
      
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
      // Same meaning trial - find numbers with the same numerical value
      const format1 = combination.formats[0];
      const format2 = combination.formats[1];
      this.formatUsage[format1]++;
      this.formatUsage[format2]++;
      
      // Find a number that exists in both formats with the same numerical value
      let index1, index2, value1, value2;
      let attempts = 0;
      const maxAttempts = 100;
      
      do {
        index1 = Math.floor(Math.random() * gameState.numberRange);
        value1 = this.getNumericalValue(numberData[format1][index1], format1);
        
        // Find a matching value in format2
        index2 = Math.floor(Math.random() * gameState.numberRange);
        value2 = this.getNumericalValue(numberData[format2][index2], format2);
        
        attempts++;
      } while (Math.abs(value1 - value2) > 0.01 && attempts < maxAttempts);
      
      // If we couldn't find matching values, just use the same index as fallback
      if (attempts >= maxAttempts) {
        index2 = index1;
        value2 = value1;
      }
      
      console.log(`DEBUG: Same meaning trial - ${numberData[format1][index1]} (${value1}) vs ${numberData[format2][index2]} (${value2}), sameMeaning: true`);
      
      return {
        item1: { value: numberData[format1][index1], format: format1, index: index1 },
        item2: { value: numberData[format2][index2], format: format2, index: index2 },
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
      
      // Generate different numbers with different actual values
      let index1, index2, value1, value2;
      let attempts = 0;
      const maxAttempts = 100;
      
      do {
        index1 = Math.floor(Math.random() * gameState.numberRange);
        index2 = Math.floor(Math.random() * gameState.numberRange);
        
        // Get the actual numerical values
        value1 = this.getNumericalValue(numberData[format1][index1], format1);
        value2 = this.getNumericalValue(numberData[format2][index2], format2);
        
        attempts++;
      } while ((index1 === index2 || Math.abs(value1 - value2) < 0.01) && attempts < maxAttempts);
      
      // If we couldn't find different values, just ensure different indices
      if (attempts >= maxAttempts) {
        do {
          index2 = Math.floor(Math.random() * gameState.numberRange);
        } while (index1 === index2);
        value1 = this.getNumericalValue(numberData[format1][index1], format1);
        value2 = this.getNumericalValue(numberData[format2][index2], format2);
      }
      
      const sameMeaning = Math.abs(value1 - value2) < 0.01;
      console.log(`DEBUG: Different meaning trial - ${numberData[format1][index1]} (${value1}) vs ${numberData[format2][index2]} (${value2}), sameMeaning: ${sameMeaning}`);
      
      return {
        item1: { value: numberData[format1][index1], format: format1, index: index1 },
        item2: { value: numberData[format2][index2], format: format2, index: index2 },
        sameFormat: format1 === format2,
        sameMeaning: sameMeaning
      };
    }
  }

  // Helper method to get numerical value from any number format
  getNumericalValue(value, format) {
    switch (format) {
      case 'arabic':
        return parseFloat(value);
      case 'word':
        return this.wordToNumber(value);
      case 'roman':
        return this.romanToNumber(value);
      case 'binary':
        return parseInt(value, 2);
      case 'hexadecimal':
        return parseInt(value, 16);
      case 'scientific':
        return parseFloat(value.replace('×10', 'e').replace('⁰', '0').replace('¹', '1').replace('²', '2').replace('³', '3'));
      case 'fraction':
        const [numerator, denominator] = value.split('/').map(Number);
        return numerator / denominator;
      case 'ordinal':
        return parseInt(value.replace(/\D/g, ''));
      case 'percentage':
        return parseFloat(value.replace('%', ''));
      case 'tally':
        return this.tallyToNumber(value);
      default:
        return 0;
    }
  }

  // Convert word numbers to numerical values
  wordToNumber(word) {
    const wordMap = {
      'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
      'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10,
      'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15,
      'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20
    };
    
    // Handle compound words like "twenty-one"
    if (word.includes('-')) {
      const parts = word.split('-');
      return wordMap[parts[0]] + (wordMap[parts[1]] || 0);
    }
    
    // Handle "one hundred" etc.
    if (word.includes('hundred')) {
      const parts = word.split(' ');
      if (parts.length === 2) {
        return wordMap[parts[0]] * 100;
      } else if (parts.length === 3) {
        return wordMap[parts[0]] * 100 + wordMap[parts[2]];
      }
    }
    
    return wordMap[word] || 0;
  }

  // Convert Roman numerals to numbers
  romanToNumber(roman) {
    const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
      if (i + 1 < roman.length && values[roman[i]] < values[roman[i + 1]]) {
        result -= values[roman[i]];
      } else {
        result += values[roman[i]];
      }
    }
    return result;
  }

  // Convert tally marks to numbers
  tallyToNumber(tally) {
    const groups = (tally.match(/卌/g) || []).length;
    const remainder = (tally.match(/\|/g) || []).length;
    return groups * 5 + remainder;
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
      
      // Bug fix: Check if enabledCategories is empty
      if (enabledCategories.length === 0) {
        console.warn('No semantic categories are enabled. Falling back to numbers mode.');
        gameState.nextUseSemantic = false;
        gameState.currentStimulusType = 'numbers';
        gameState.currentSemanticCategory = null;
        gameState.nextSemanticCategory = null;
        gameState.currentRule = Math.random() < 0.5 ? 1 : 2;
        return;
      }
      
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
      
      // Bug fix: If semantic generation fails, fall back to numbers
      if (!gameState.currentPair) {
        console.warn('Semantic stimulus generation failed, falling back to numbers');
        gameState.currentStimulusType = 'numbers';
        gameState.currentSemanticCategory = null;
        gameState.nextSemanticCategory = null;
        gameState.currentPair = this.generateNumberStimulus();
      }
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

// Make SEMANTIC_RULES available globally for logging
window.SEMANTIC_RULES = SEMANTIC_RULES;
