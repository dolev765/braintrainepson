// Game configuration constants

export const GAME_CONFIG = {
  // Trial settings
  TRIALS_PER_SESSION: 32,
  MAX_ERRORS_PER_LEVEL: 3,
  MAX_CONSECUTIVE_FAILURES: 3,
  
  // Timing settings
  FIXATION_DURATION: 500,
  FEEDBACK_DURATION: 1000,
  INTER_TRIAL_INTERVAL: 1000,
  
  // Level progression
  LEVELS_TO_COMPLETE: 10,
  MIN_ACCURACY_FOR_ADVANCEMENT: 0.75,
  MAX_LEVEL: 50,
  MIN_LEVEL: 1,
  
  // Response settings
  VALID_KEYS: ['j', 'f', 'J', 'F'],
  SAME_KEY: 'j',
  DIFFERENT_KEY: 'f',
  
  // Display settings
  STIMULUS_FONT_SIZE: '48px',
  STIMULUS_FONT_FAMILY: 'Inter, sans-serif',
  STIMULUS_COLOR: '#333333',
  
  // Feedback settings
  CORRECT_COLOR: '#2d7a2d',
  INCORRECT_COLOR: '#cc2929',
  NEUTRAL_COLOR: '#666666',
  
  // Progress tracking
  SAVE_INTERVAL: 5, // Save every 5 trials
  MAX_HISTORY_DAYS: 30,
  
  // Storage keys
  STORAGE_KEYS: {
    TASK_DATA: 'posnerTaskData',
    PROGRESS: 'posnerTaskProgress'
  },
  
  // Accessibility
  KEYBOARD_NAVIGATION: true,
  SCREEN_READER_SUPPORT: true,
  HIGH_CONTRAST_MODE: false
};
