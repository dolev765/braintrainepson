// Configuration Index - Main aggregator for all config modules

// Number configurations
export { numberData } from './numbers/number-data.js';
export { formatCombinations } from './numbers/format-combinations.js';

// Semantic configurations
export { semanticData, tier1Categories, tier2Categories, tier3Categories } from './semantic/index.js';
export { SEMANTIC_RULES } from './semantic/semantic-rules.js';

// Game configurations
export { GAME_CONFIG } from './game/game-config.js';
export { levelTimes } from './game/level-times.js';
export { DEFAULT_SETTINGS } from './game/default-settings.js';

// UI configurations
export { UI_CONFIG } from './ui/ui-config.js';
export { STATS_CONFIG } from './ui/stats-config.js';
export { ACHIEVEMENTS_CONFIG } from './ui/achievements-config.js';
export { ERROR_MESSAGES, SUCCESS_MESSAGES, HELP_TEXT } from './ui/messages.js';


