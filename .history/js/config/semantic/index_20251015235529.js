// Semantic data aggregator - combines all tier categories

import { tier1Categories } from './tier1-basic.js';
import { tier2Categories } from './tier2-common.js';
import { tier3Categories } from './tier3-expert.js';

// Combined semantic data export
export const semanticData = {
  ...tier1Categories,
  ...tier2Categories,
  ...tier3Categories
};

// Re-export individual tiers for flexibility
export { tier1Categories, tier2Categories, tier3Categories };

