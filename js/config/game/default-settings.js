export const DEFAULT_SETTINGS = {
  // Display settings
  showErrorCounts: true,
  showProgressBar: true,
  showFeedback: true,
  showLevelChangeMessages: true,
  showAchievements: true,
  
  // Game settings
  numberRange: 10,
  modeType: 'classic',
  isProgressiveMode: true,
  selectedLevel: 1,
  
  // Semantic tier settings
  enabledSemanticTiers: {
    tier1: true,  // Basic (always on)
    tier2: false, // Common knowledge
    tier3: false  // Expert knowledge
  },
  
  // Audio settings
  enableSound: false,
  soundVolume: 0.5,
  enableVoiceFeedback: false,
  
  // Visual settings
  theme: 'light',
  fontSize: 'medium',
  colorScheme: 'default',
  animationSpeed: 'normal',
  
  // Accessibility settings
  highContrast: false,
  largeText: false,
  reducedMotion: false,
  screenReader: false,
  
  // Training settings
  autoAdvance: false,
  practiceMode: false,
  adaptiveDifficulty: true,
  showHints: false,
  
  // Data settings
  saveProgress: true,
  shareData: false,
  analytics: false
};
