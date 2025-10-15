// Game State Management - Handles all game state variables and persistence

import { GAME_CONFIG, DEFAULT_SETTINGS } from './config/index.js';

// Game state variables
export class GameState {
  constructor() {
    this.reset();
    this.loadFromStorage();
  }

  reset() {
    // Core game state
    this.currentLevel = 1;
    this.currentRule = 1; // 1 for physical property, 2 for meaning
    this.isProgressiveMode = true;
    this.modeType = DEFAULT_SETTINGS.modeType;
    this.numberRange = DEFAULT_SETTINGS.numberRange;
    this.selectedLevel = DEFAULT_SETTINGS.selectedLevel;
    
    // Trial tracking
    this.trialCount = 0;
    this.presentationTime = 1200;
    this.currentPair = null;
    this.trialTypes = [];
    this.waitingForNextTrial = false;
    
    // Performance tracking
    this.totalCorrect = 0;
    this.totalAttempts = 0;
    this.errorCount = 0;
    this.consecutiveFailures = 0;
    
    // Session tracking
    this.sessionHistory = [];
    this.sessionLevelHigh = 1;
    this.sessionLevelLow = 1;
    
    // Stimulus type tracking
    this.currentStimulusType = 'numbers';
    this.currentSemanticCategory = null;
    this.nextUseSemantic = false;
    this.nextSemanticCategory = null;
    
    // Format usage tracking
    this.formatUsage = {
      arabic: 0,
      word: 0,
      roman: 0
    };
    
    // Timer
    this.timer = null;
    
    // Settings
    this.showErrorCounts = DEFAULT_SETTINGS.showErrorCounts;
    
    // Semantic tier settings
    this.enabledSemanticTiers = {
      tier1: true,  // Basic (always on)
      tier2: false, // Common knowledge
      tier3: false  // Expert knowledge
    };
    
    // Progress tracking
    this.lastRecordedLevel = 1;
    this.lastRecordedLevels = { classic: 1, multi: 1 };
  }

  // Storage management
  loadFromStorage() {
    const savedData = localStorage.getItem(GAME_CONFIG.STORAGE_KEYS.TASK_DATA);
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        if (data.lastRecordedLevels) {
          this.lastRecordedLevels = {
            classic: data.lastRecordedLevels.classic || 1,
            multi: data.lastRecordedLevels.multi || 1
          };
        } else {
          const legacy = data.lastRecordedLevel || 1;
          this.lastRecordedLevels = { classic: legacy, multi: legacy };
        }
        this.showErrorCounts = data.showErrorCounts !== undefined ? data.showErrorCounts : DEFAULT_SETTINGS.showErrorCounts;
      } catch (error) {
        console.warn('Error loading saved data:', error);
      }
    }
    this.lastRecordedLevel = this.lastRecordedLevels[this.modeType];
  }

  saveToStorage() {
    const data = { 
      lastRecordedLevels: this.lastRecordedLevels, 
      showErrorCounts: this.showErrorCounts, 
      lastRecordedLevel: this.lastRecordedLevels[this.modeType] 
    };
    localStorage.setItem(GAME_CONFIG.STORAGE_KEYS.TASK_DATA, JSON.stringify(data));
  }

  // Level management
  advanceLevel() {
    if (this.currentLevel < GAME_CONFIG.MAX_LEVEL) {
      this.currentLevel++;
      this.presentationTime = this.getLevelTime(this.currentLevel);
      if (this.currentLevel > this.sessionLevelHigh) {
        this.sessionLevelHigh = this.currentLevel;
      }
      return true;
    }
    return false;
  }

  decreaseLevel() {
    if (this.currentLevel > GAME_CONFIG.MIN_LEVEL) {
      this.currentLevel--;
      this.presentationTime = this.getLevelTime(this.currentLevel);
      if (this.currentLevel < this.sessionLevelLow) {
        this.sessionLevelLow = this.currentLevel;
      }
      return true;
    }
    return false;
  }

  getLevelTime(level) {
    const levelTimes = {
      1: 1200, 2: 1100, 3: 1000, 4: 900, 5: 800,
      6: 700, 7: 600, 8: 500, 9: 400, 10: 300
    };
    return levelTimes[level] || 300;
  }

  // Trial management
  generateTrialTypes() {
    this.trialTypes = [];
    for (let i = 0; i < GAME_CONFIG.TOTAL_TRIALS / 2; i++) {
      this.trialTypes.push(true);
      this.trialTypes.push(false);
    }
    // Shuffle the array
    for (let i = this.trialTypes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.trialTypes[i], this.trialTypes[j]] = [this.trialTypes[j], this.trialTypes[i]];
    }
  }

  nextTrial() {
    this.trialCount++;
    this.waitingForNextTrial = false;
  }

  isSessionComplete() {
    return this.trialCount >= GAME_CONFIG.TOTAL_TRIALS;
  }

  // Performance tracking
  recordCorrectResponse() {
    this.totalCorrect++;
    this.totalAttempts++;
    this.consecutiveFailures = 0;
  }

  recordIncorrectResponse() {
    this.errorCount++;
    this.consecutiveFailures++;
    this.totalAttempts++;
  }

  recordTimeout() {
    this.errorCount++;
    this.consecutiveFailures++;
    this.totalAttempts++;
  }

  shouldDecreaseLevel() {
    return this.consecutiveFailures >= GAME_CONFIG.MAX_CONSECUTIVE_FAILURES;
  }

  shouldAdvanceLevel() {
    return this.errorCount <= GAME_CONFIG.MAX_ERRORS_PER_LEVEL;
  }

  // Mode management
  setMode(modeType) {
    this.modeType = modeType;
    this.lastRecordedLevel = this.lastRecordedLevels[modeType];
  }

  setProgressiveMode(isProgressive) {
    this.isProgressiveMode = isProgressive;
  }

  setManualLevel(level) {
    this.selectedLevel = level;
  }

  // Settings management
  setShowErrorCounts(show) {
    this.showErrorCounts = show;
    this.saveToStorage();
  }

  setNumberRange(range) {
    this.numberRange = range === 20 ? 20 : 10;
  }

  // Semantic tier management
  setSemanticTier(tier, enabled) {
    if (this.enabledSemanticTiers.hasOwnProperty(tier)) {
      this.enabledSemanticTiers[tier] = enabled;
    }
  }

  getEnabledSemanticTiers() {
    return this.enabledSemanticTiers;
  }

  // Session management
  startNewSession() {
    this.trialCount = 0;
    this.totalCorrect = 0;
    this.errorCount = 0;
    this.consecutiveFailures = 0;
    this.sessionHistory = [];
    this.generateTrialTypes();
    
    if (this.isProgressiveMode) {
      this.currentLevel = this.lastRecordedLevel;
    } else {
      this.currentLevel = this.selectedLevel;
    }
    
    this.presentationTime = this.getLevelTime(this.currentLevel);
    this.sessionLevelHigh = this.currentLevel;
    this.sessionLevelLow = this.currentLevel;
  }

  completeSession() {
    if (this.isProgressiveMode) {
      if (this.shouldAdvanceLevel()) {
        this.advanceLevel();
      }
      this.lastRecordedLevel = this.currentLevel;
      this.lastRecordedLevels[this.modeType] = this.currentLevel;
      this.saveToStorage();
    }
  }

  // Timer management
  setTimer(callback, delay) {
    this.clearTimer();
    this.timer = setTimeout(callback, delay);
  }

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  // Utility methods
  getAccuracy() {
    return this.totalAttempts > 0 ? Math.round((this.totalCorrect / this.totalAttempts) * 100) : 0;
  }

  getProgressPercentage() {
    return (this.trialCount / GAME_CONFIG.TRIALS_PER_SESSION) * 100;
  }

  resetLevel() {
    this.lastRecordedLevels[this.modeType] = 1;
    this.lastRecordedLevel = 1;
    this.saveToStorage();
  }
}

// Create global game state instance
export const gameState = new GameState();
