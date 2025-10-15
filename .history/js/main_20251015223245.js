// Main JavaScript file - Initializes the application and handles event listeners

import { gameState } from './game-state.js';
import { gameLogic } from './game-logic.js';
import { uiController } from './ui-controller.js';
import { progressTracker } from './progress-tracker.js';

// Initialize the application
class PosnerTaskApp {
  constructor() {
    this.initializeApp();
    this.setupEventListeners();
    this.setupKeyboardListeners();
  }

  // Initialize the application
  initializeApp() {
    // Set up cross-references
    gameLogic.setUIController(uiController);
    progressTracker.setUIController(uiController);
    
    // Initialize UI
    uiController.updateLastCompletedLevel();
    uiController.updateErrorCountsDisplay();
    
    // Set initial mode
    this.selectMode('classic');
  }

  // Setup event listeners
  setupEventListeners() {
    // Mode selection
    document.getElementById('progressiveMode')?.addEventListener('click', () => {
      this.selectMode('classic');
    });

    document.getElementById('comprehensiveMode')?.addEventListener('click', () => {
      this.selectMode('multi');
    });

    document.getElementById('manualMode')?.addEventListener('click', () => {
      this.selectManualMode();
    });

    // Number range selection
    const rangeSelect = document.getElementById('numberRangeSelect');
    if (rangeSelect) {
      rangeSelect.addEventListener('change', (e) => {
        gameLogic.updateNumberRange(parseInt(e.target.value));
      });
    }

    // Level buttons for manual mode
    const levelButtons = document.querySelectorAll('.level-button');
    levelButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        levelButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        gameLogic.selectManualLevel(parseInt(e.target.getAttribute('data-level')));
      });
    });

    // Settings
    document.getElementById('showErrorCounts')?.addEventListener('change', (e) => {
      gameLogic.updateShowErrorCounts(e.target.checked);
    });

    // Main action buttons
    document.getElementById('startTask')?.addEventListener('click', () => {
      gameLogic.startTask();
    });

    document.getElementById('continueButton')?.addEventListener('click', () => {
      gameLogic.showFixationCross();
    });

    document.getElementById('differentButton')?.addEventListener('click', () => {
      gameLogic.handleResponse(false);
    });

    document.getElementById('sameButton')?.addEventListener('click', () => {
      gameLogic.handleResponse(true);
    });

    // Navigation buttons
    document.getElementById('backToHomeFromRule')?.addEventListener('click', () => {
      this.goBackToHome();
    });

    document.getElementById('backToHomeFromTask')?.addEventListener('click', () => {
      this.goBackToHome();
    });

    document.getElementById('backToHomeFromFixation')?.addEventListener('click', () => {
      this.goBackToHome();
    });

    // Session management
    document.getElementById('returnToMenu')?.addEventListener('click', () => {
      gameLogic.returnToMenu();
    });

    document.getElementById('startNewSession')?.addEventListener('click', () => {
      gameLogic.startNewSession();
    });

    document.getElementById('startNewTest')?.addEventListener('click', () => {
      gameLogic.startNewTest();
    });

    // Progress and settings
    document.getElementById('viewProgress')?.addEventListener('click', () => {
      progressTracker.showProgressScreen();
    });

    document.getElementById('progressBackToMenu')?.addEventListener('click', () => {
      uiController.hideAllScreens();
      uiController.showScreen('descriptionScreen');
    });

    document.getElementById('resetLevel')?.addEventListener('click', () => {
      gameLogic.resetLevel();
    });

    // Progress filter
    const progressModeFilter = document.getElementById('progressModeFilter');
    if (progressModeFilter) {
      progressModeFilter.addEventListener('change', () => {
        progressTracker.renderProgressChart();
      });
    }
  }

  // Setup keyboard listeners
  setupKeyboardListeners() {
    document.addEventListener('keydown', (event) => {
      // Rule screen - spacebar to continue
      if (uiController.screens.ruleScreen?.style.display !== 'none' && 
          (event.key === ' ' || event.code === 'Space')) {
        event.preventDefault();
        gameLogic.showFixationCross();
      }
      
      // Task screen - F and J keys for responses
      if (uiController.screens.taskScreen?.style.display !== 'none') {
        if (event.key === 'f' || event.key === 'F') {
          event.preventDefault();
          gameLogic.handleResponse(false);
        } else if (event.key === 'j' || event.key === 'J') {
          event.preventDefault();
          gameLogic.handleResponse(true);
        }
      }
    });
  }

  // Select game mode
  selectMode(modeType) {
    // Update button states
    document.getElementById('progressiveMode')?.classList.remove('active');
    document.getElementById('comprehensiveMode')?.classList.remove('active');
    document.getElementById('manualMode')?.classList.remove('active');
    
    if (modeType === 'classic') {
      document.getElementById('progressiveMode')?.classList.add('active');
    } else if (modeType === 'multi') {
      document.getElementById('comprehensiveMode')?.classList.add('active');
    }
    
    // Hide manual controls
    uiController.hideManualControls();
    
    // Update game state and UI
    gameLogic.selectMode(modeType);
  }

  // Select manual mode
  selectManualMode() {
    // Update button states
    document.getElementById('progressiveMode')?.classList.remove('active');
    document.getElementById('comprehensiveMode')?.classList.remove('active');
    document.getElementById('manualMode')?.classList.add('active');
    
    // Show manual controls
    uiController.showManualControls();
    
    // Update game state and UI
    gameLogic.selectManualMode();
  }

  // Go back to home screen
  goBackToHome() {
    gameState.clearTimer();
    uiController.hideAllScreens();
    uiController.showScreen('descriptionScreen');
    gameLogic.resetTest();
  }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PosnerTaskApp();
});

// Export for potential external use
export { PosnerTaskApp };
