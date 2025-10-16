// Game Logic - Core game mechanics and flow control

import { gameState } from './game-state.js';
import { stimulusGenerator } from './stimulus-generator.js';
import { GAME_CONFIG } from './config/index.js';

export class GameLogic {
  constructor() {
    this.uiController = null;
  }

  // Set UI controller reference
  setUIController(uiController) {
    this.uiController = uiController;
  }

  // Start a new test session
  startNewTest() {
    this.resetTest();
    this.uiController.hideScreen('scoreScreen');
    this.uiController.showScreen('descriptionScreen');
  }

  // Reset test state
  resetTest() {
    gameState.clearTimer();
    gameState.trialCount = 0;
    gameState.totalCorrect = 0;
    gameState.totalAttempts = 0;
    gameState.errorCount = 0;
    gameState.consecutiveFailures = 0;
    stimulusGenerator.resetFormatUsage();
    gameState.generateTrialTypes();
    
    if (this.uiController) {
      this.uiController.clearHistory();
      this.uiController.hideFeedback();
    }
  }

  // Reset difficulty level
  resetLevel() {
    gameState.resetLevel();
    this.uiController.updateLastCompletedLevel();
    alert("Difficulty level has been reset to 1.");
  }

  // Return to main menu
  returnToMenu() {
    this.uiController.hideScreen('sessionCompleteScreen');
    this.uiController.showScreen('descriptionScreen');
  }

  // Start a new session
  startNewSession() {
    this.uiController.hideScreen('sessionCompleteScreen');
    gameState.startNewSession();
    stimulusGenerator.resetFormatUsage();
    this.showNextRule();
  }

  // Show the next rule screen
  showNextRule() {
    gameState.waitingForNextTrial = false;
    stimulusGenerator.selectRandomRule();
    
    if (this.uiController) {
      this.uiController.updateGameHeader();
      this.uiController.updateRuleDisplay(stimulusGenerator.getRuleDisplay());
      this.uiController.updateErrorCounts();
      this.uiController.showScreen('ruleScreen');
    }
  }

  // Show fixation cross
  showFixationCross() {
    if (this.uiController) {
      this.uiController.hideScreen('ruleScreen');
      this.uiController.showScreen('fixationScreen');
      
      gameState.setTimer(() => {
        this.uiController.hideScreen('fixationScreen');
        this.uiController.showScreen('taskScreen');
        this.uiController.updateErrorCounts();
        this.generateStimulus();
      }, GAME_CONFIG.FIXATION_DURATION);
    }
  }

  // Generate and display stimulus
  generateStimulus() {
    const pair = stimulusGenerator.generateStimulus();
    
    if (this.uiController) {
      this.uiController.updateStimulusDisplay(pair);
      this.uiController.updateGameHeader();
      this.uiController.updateErrorCounts();
      this.uiController.updateProgress();
      
      // Set timeout for stimulus display
      gameState.setTimer(() => {
        this.uiController.clearStimulusDisplay();
        this.handleResponse(null);
      }, gameState.presentationTime);
    }
  }

  // Handle user response
  handleResponse(response) {
    if (gameState.waitingForNextTrial) return;
    
    gameState.waitingForNextTrial = true;
    gameState.clearTimer();
    
    if (response === null) {
      // Timeout
      gameState.recordTimeout();
      this.addHistory(gameState.currentPair, false, response);
      this.proceedToNextTrial(false);
      return;
    }
    
    let isCorrect = false;
    // Bug fix: Check if currentPair exists
    if (!gameState.currentPair) {
      console.error('Current pair is null, cannot determine correctness');
      this.addHistory(null, false, response);
      this.proceedToNextTrial(false);
      return;
    }
    
    if (gameState.currentRule === 1) {
      isCorrect = (response === gameState.currentPair.sameFormat);
    } else if (gameState.currentRule === 2) {
      isCorrect = (response === gameState.currentPair.sameMeaning);
    }
    
    gameState.totalAttempts++;
    
    if (isCorrect) {
      gameState.recordCorrectResponse();
      this.uiController.showFeedback(true, "Correct!");
    } else {
      gameState.recordIncorrectResponse();
      this.uiController.showFeedback(false, "Incorrect!");
    }
    
    this.addHistory(gameState.currentPair, isCorrect, response);
    
    // Handle level progression
    if (gameState.isProgressiveMode) {
      if (gameState.shouldDecreaseLevel()) {
        if (gameState.decreaseLevel()) {
          this.uiController.showLevelChangeMessage(
            `Too many consecutive failures. Dropping to level ${gameState.currentLevel}`
          );
        }
        gameState.consecutiveFailures = 0;
      }
    }
    
    // Proceed to next trial after feedback
    gameState.setTimer(() => {
      this.proceedToNextTrial(isCorrect);
    }, GAME_CONFIG.FEEDBACK_DURATION);
  }

  // Proceed to next trial
  proceedToNextTrial(isCorrect) {
    gameState.nextTrial();
    
    if (gameState.isSessionComplete()) {
      this.completedSession();
    } else {
      this.showNextRule();
    }
  }

  // Handle session completion
  completedSession() {
    if (gameState.isProgressiveMode) {
      if (gameState.shouldAdvanceLevel()) {
        if (gameState.advanceLevel()) {
          this.uiController.showLevelChangeMessage(
            `Great job! Advancing to level ${gameState.currentLevel}`
          );
        }
      }
    }
    
    gameState.completeSession();
    
    if (this.uiController) {
      this.uiController.hideScreen('taskScreen');
      this.uiController.showScreen('sessionCompleteScreen');
      this.uiController.updateSessionResults();
    }
  }

  // Add trial to history
  addHistory(pair, isCorrect, response) {
    const historyItem = {
      level: gameState.currentLevel,
      trial: gameState.trialCount + 1,
      rule: gameState.currentRule,
      pair,
      isCorrect,
      response
    };
    
    gameState.sessionHistory.push(historyItem);
    
    if (this.uiController) {
      this.uiController.addHistoryItem(historyItem);
      this.uiController.updateErrorCounts();
    }
  }

  // Show level change message
  showLevelChangeMessage(message) {
    if (this.uiController) {
      this.uiController.showLevelChangeMessage(message);
    }
  }

  // Handle mode selection
  selectMode(modeType) {
    gameState.setMode(modeType);
    gameState.setProgressiveMode(true);
    
    if (this.uiController) {
      this.uiController.updateModeDescription(modeType);
      this.uiController.updateLastCompletedLevel();
    }
    
    gameState.saveToStorage();
  }

  // Handle manual mode selection
  selectManualMode() {
    gameState.setProgressiveMode(false);
    
    if (this.uiController) {
      this.uiController.updateModeDescription('manual');
      this.uiController.showManualControls();
    }
  }

  // Handle level selection for manual mode
  selectManualLevel(level) {
    gameState.setManualLevel(level);
  }

  // Handle settings changes
  updateShowErrorCounts(show) {
    gameState.setShowErrorCounts(show);
    if (this.uiController) {
      this.uiController.updateErrorCountsDisplay();
    }
  }

  updateNumberRange(range) {
    gameState.setNumberRange(range);
  }

  // Start the task
  startTask() {
    this.uiController.hideScreen('descriptionScreen');
    gameState.startNewSession();
    stimulusGenerator.resetFormatUsage();
    this.showNextRule();
  }
}

// Create global game logic instance
export const gameLogic = new GameLogic();
