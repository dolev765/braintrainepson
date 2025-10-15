export const STATS_CONFIG = {
  // Metrics to track
  METRICS: {
    ACCURACY: 'accuracy',
    REACTION_TIME: 'reactionTime',
    LEVEL_REACHED: 'levelReached',
    SESSIONS_COMPLETED: 'sessionsCompleted',
    TOTAL_TRIALS: 'totalTrials',
    STREAK: 'streak',
    ERRORS: 'errors'
  },
  
  // Time periods for statistics
  TIME_PERIODS: {
    TODAY: 'today',
    WEEK: 'week',
    MONTH: 'month',
    YEAR: 'year',
    ALL_TIME: 'allTime'
  },
  
  // Performance categories
  PERFORMANCE_CATEGORIES: {
    BEGINNER: { min: 0, max: 0.6, label: 'Beginner' },
    INTERMEDIATE: { min: 0.6, max: 0.8, label: 'Intermediate' },
    ADVANCED: { min: 0.8, max: 0.9, label: 'Advanced' },
    EXPERT: { min: 0.9, max: 1.0, label: 'Expert' }
  }
};
