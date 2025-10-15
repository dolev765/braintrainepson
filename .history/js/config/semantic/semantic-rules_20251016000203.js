export const SEMANTIC_RULES = {
  categorical: {
    title: 'Categorical',
    description: "Judge specific–category relation. Press 'J' if related (e.g., sparrow–bird), 'F' otherwise.",
    difficulty: 'easy',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['sparrow-bird', 'oak-tree', 'salmon-fish']
  },
  partWhole: {
    title: 'Part–Whole',
    description: "Judge part–whole relation. Press 'J' if there is a part-whole relationship (e.g., petal–flower or door–handle), 'F' otherwise.",
    difficulty: 'medium',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['petal-flower', 'wheel-car', 'page-book']
  },
  functional: {
    title: 'Functional',
    description: "Judge functional pairing. Press 'J' if items go together in use (e.g., key–lock), 'F' otherwise.",
    difficulty: 'medium',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['key-lock', 'pen-paper', 'needle-thread']
  },
  colorProperty: {
    title: 'Color Property',
    description: "Judge shared color. Press 'J' if the pair shares a color property (e.g., grass–emerald), 'F' otherwise.",
    difficulty: 'easy',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['grass-emerald', 'sky-ocean', 'lemon-sun']
  },
  antonyms: {
    title: 'Antonyms',
    description: "Judge opposites. Press 'J' if the words are opposites (e.g., hot–cold), 'F' otherwise.",
    difficulty: 'easy',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['hot-cold', 'fast-slow', 'light-dark']
  },
  actionObject: {
    title: 'Action–Object',
    description: "Judge action–object fit. Press 'J' if the action typically applies to the object (e.g., eat–food), 'F' otherwise.",
    difficulty: 'medium',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['eat-food', 'read-book', 'write-letter']
  },
  spatial: {
    title: 'Spatial Relations',
    description: "Judge spatial relationships. Press 'J' if the words are spatial opposites (e.g., top–bottom), 'F' otherwise.",
    difficulty: 'medium',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['top-bottom', 'inside-outside', 'north-south']
  },
  temporal: {
    title: 'Temporal Relations',
    description: "Judge time relationships. Press 'J' if the words are temporal opposites (e.g., morning–evening), 'F' otherwise.",
    difficulty: 'medium',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['morning-evening', 'dawn-dusk', 'spring-autumn']
  },
  size: {
    title: 'Size Relations',
    description: "Judge size relationships. Press 'J' if the words are size opposites (e.g., giant–tiny), 'F' otherwise.",
    difficulty: 'easy',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['giant-tiny', 'huge-miniature', 'massive-microscopic']
  },
  quantity: {
    title: 'Quantity Relations',
    description: "Judge quantity relationships. Press 'J' if the words are quantity opposites (e.g., many–few), 'F' otherwise.",
    difficulty: 'medium',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['many-few', 'numerous-scarce', 'abundant-rare']
  },
  emotional: {
    title: 'Emotional Relations',
    description: "Judge emotional relationships. Press 'J' if the words are emotional opposites (e.g., joy–sorrow), 'F' otherwise.",
    difficulty: 'hard',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['joy-sorrow', 'love-hate', 'hope-despair']
  },
  material: {
    title: 'Material Relations',
    description: "Judge material relationships. Press 'J' if the first item is made from the second (e.g., wood–tree), 'F' otherwise.",
    difficulty: 'medium',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['wood-tree', 'metal-iron', 'glass-sand']
  },
  weather: {
    title: 'Weather Relations',
    description: "Judge weather relationships. Press 'J' if the words are weather-related (e.g., sun–sunny), 'F' otherwise.",
    difficulty: 'easy',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['sun-sunny', 'rain-rainy', 'snow-snowy']
  },
  body: {
    title: 'Body Relations',
    description: "Judge body relationships. Press 'J' if the words are body-related (e.g., heart–blood), 'F' otherwise.",
    difficulty: 'medium',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['heart-blood', 'lung-breath', 'brain-thought']
  },
  profession: {
    title: 'Profession Relations',
    description: "Judge profession relationships. Press 'J' if the words are profession-related (e.g., doctor–patient), 'F' otherwise.",
    difficulty: 'medium',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['doctor-patient', 'teacher-student', 'lawyer-client']
  },

  // NEW: Research-Aligned Categories
  parity: {
    title: 'Parity Relations',
    description: "Judge number parity. Press 'J' if both numbers have the same parity (both odd or both even), 'F' otherwise.",
    difficulty: 'easy',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['1-3 (both odd)', '2-4 (both even)', '1-2 (mixed parity)']
  },

  mathematical: {
    title: 'Mathematical Relations',
    description: "Judge mathematical relationships. Press 'J' if there's a clear mathematical relationship (greater/less, divisible), 'F' otherwise.",
    difficulty: 'medium',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['10-5 (greater)', '15-3 (divisible)', '7-13 (no clear relationship)']
  },

  crossFormat: {
    title: 'Cross-Format Relations',
    description: "Judge semantic equivalence across formats. Press 'J' if the items represent the same semantic meaning in different formats, 'F' otherwise.",
    difficulty: 'hard',
    tier: 1,
    requiresExpertise: false,
    defaultEnabled: true,
    examples: ['1-one', 'I-1', '1-1st', '1-1 (binary)']
  },

  // TIER 2 - COMMON KNOWLEDGE (Default off)
  animals: {
    title: 'Animal Relations',
    description: "Judge animal relationships. Press 'J' if the words are animal-related (e.g., dog–puppy), 'F' otherwise.",
    difficulty: 'easy',
    tier: 2,
    requiresExpertise: false,
    defaultEnabled: false,
    examples: ['dog-puppy', 'cat-kitten', 'lion-cub']
  },

  semanticComplexity: {
    title: 'Abstract Semantic Relations',
    description: "Judge abstract semantic relationships. Press 'J' if the words share abstract conceptual meaning (e.g., justice–fairness), 'F' otherwise.",
    difficulty: 'hard',
    tier: 2,
    requiresExpertise: true,
    defaultEnabled: false,
    examples: ['justice-fairness', 'wisdom-knowledge', 'courage-bravery']
  },

  cognitiveLoad: {
    title: 'High Cognitive Load Relations',
    description: "Judge complex cognitive relationships. Press 'J' if the words share cognitive/metacognitive meaning (e.g., metaphor–analogy), 'F' otherwise.",
    difficulty: 'hard',
    tier: 2,
    requiresExpertise: true,
    defaultEnabled: false,
    examples: ['metaphor-analogy', 'concept-idea', 'analysis-examination']
  },

  // TIER 3 - EXPERT KNOWLEDGE (Default off)
  geography: {
    title: 'Geography Relations',
    description: "Judge geographical relationships. Press 'J' if the words are geographically related (e.g., France–Paris), 'F' otherwise.",
    difficulty: 'hard',
    tier: 3,
    requiresExpertise: true,
    defaultEnabled: false,
    examples: ['France-Paris', 'Germany-Berlin', 'Japan-Tokyo']
  },
  science: {
    title: 'Science Relations',
    description: "Judge scientific relationships. Press 'J' if the words are scientifically related (e.g., hydrogen–H), 'F' otherwise.",
    difficulty: 'hard',
    tier: 3,
    requiresExpertise: true,
    defaultEnabled: false,
    examples: ['hydrogen-H', 'Einstein-relativity', 'Newton-gravity']
  }
};
