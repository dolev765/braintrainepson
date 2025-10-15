// Configuration file - Contains all game constants and settings

// Number data for stimulus generation
export const numberData = {
  arabic: [
    "1","2","3","4","5","6","7","8","9","10",
    "11","12","13","14","15","16","17","18","19","20"
  ],
  word: [
    "one","two","three","four","five","six","seven","eight","nine","ten",
    "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"
  ],
  roman: [
    "I","II","III","IV","V","VI","VII","VIII","IX","X",
    "XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX"
  ]
};

// Semantic data (20 pairs per category; first 10 are related, last 10 unrelated)
export const semanticData = {
  categorical: [
    ["sparrow","bird"],["oak","tree"],["salmon","fish"],["violin","instrument"],["rose","flower"],["eagle","bird"],["maple","tree"],["tuna","fish"],["piano","instrument"],["tulip","flower"],
    ["stone","bird"],["car","tree"],["book","fish"],["glass","instrument"],["shoe","flower"],["cloud","bird"],["lamp","tree"],["coin","fish"],["wire","instrument"],["brick","flower"]
  ],
  partWhole: [
    ["petal","flower"],["wheel","car"],["page","book"],["leaf","tree"],["blade","knife"],["key","keyboard"],["wing","plane"],["seed","fruit"],["handle","door"],["toe","foot"],
    ["river","desert"],["engine","wheel"],["sky","page"],["root","petal"],["mouse","wing"],["toe","hand"],["cloud","car"],["glass","book"],["stone","tree"],["water","fire"]
  ],
  functional: [
    ["key","lock"],["pen","paper"],["needle","thread"],["brush","paint"],["plug","socket"],["charger","phone"],["hammer","nail"],["spoon","soup"],["glove","hand"],["umbrella","rain"],
    ["key","cloud"],["pen","stone"],["needle","glass"],["brush","sand"],["plug","book"],["charger","shoe"],["hammer","leaf"],["spoon","wall"],["glove","tree"],["umbrella","piano"]
  ],
  colorProperty: [
    ["grass","emerald"],["sky","ocean"],["lemon","sun"],["cherry","rose"],["coal","night"],["snow","paper"],["pumpkin","tiger"],["lavender","amethyst"],["sand","desert"],["chocolate","coffee"],
    ["grass","coal"],["sky","chocolate"],["lemon","lavender"],["cherry","snow"],["coal","pumpkin"],["paper","ocean"],["tiger","emerald"],["amethyst","sand"],["desert","coffee"],["night","lemon"]
  ],
  antonyms: [
    ["hot","cold"],["fast","slow"],["light","dark"],["up","down"],["empty","full"],["early","late"],["strong","weak"],["happy","sad"],["open","closed"],["near","far"],
    ["hot","warm"],["fast","quick"],["light","bright"],["up","over"],["empty","hollow"],["early","soon"],["strong","solid"],["happy","glad"],["open","ajar"],["near","close"]
  ],
  actionObject: [
    ["eat","food"],["read","book"],["write","letter"],["drink","water"],["throw","ball"],["cut","paper"],["drive","car"],["bake","bread"],["play","game"],["wash","dishes"],
    ["eat","shoe"],["read","rain"],["write","sky"],["drink","stone"],["throw","cloud"],["cut","music"],["drive","tree"],["bake","glass"],["play","wall"],["wash","smoke"]
  ]
};

// Format combinations for task
export const formatCombinations = [
  { name: "Arabic-Word", formats: ["arabic", "word"] },
  { name: "Arabic-Roman", formats: ["arabic", "roman"] },
  { name: "Word-Roman", formats: ["word", "roman"] }
];

// Level time limits in milliseconds
export const levelTimes = {
  1: 1200,
  2: 1100,
  3: 1000,
  4: 900,
  5: 800,
  6: 700,
  7: 600,
  8: 500,
  9: 400,
  10: 300
};

// Game configuration constants
export const GAME_CONFIG = {
  TOTAL_TRIALS: 32,
  MAX_ERRORS_PER_LEVEL: 3,
  MAX_CONSECUTIVE_FAILURES: 3,
  MIN_LEVEL: 1,
  MAX_LEVEL: 10,
  FIXATION_DURATION: 500,
  FEEDBACK_DURATION: 1000,
  LEVEL_CHANGE_MESSAGE_DURATION: 2000,
  STORAGE_KEYS: {
    TASK_DATA: 'posnerTaskData',
    PROGRESS: 'posnerProgress'
  }
};

// Semantic category rules configuration
export const SEMANTIC_RULES = {
  categorical: {
    title: 'Categorical',
    description: "Judge specific–category relation. Press 'J' if related (e.g., sparrow–bird), 'F' otherwise."
  },
  partWhole: {
    title: 'Part–Whole',
    description: "Judge part–whole relation. Press 'J' if there is a part-whole relationship (e.g., petal–flower or door–handle), 'F' otherwise."
  },
  functional: {
    title: 'Functional',
    description: "Judge functional pairing. Press 'J' if items go together in use (e.g., key–lock), 'F' otherwise."
  },
  colorProperty: {
    title: 'Color Property',
    description: "Judge shared color. Press 'J' if the pair shares a color property (e.g., grass–emerald), 'F' otherwise."
  },
  antonyms: {
    title: 'Antonyms',
    description: "Judge opposites. Press 'J' if the words are opposites (e.g., hot–cold), 'F' otherwise."
  },
  actionObject: {
    title: 'Action–Object',
    description: "Judge action–object fit. Press 'J' if the action typically applies to the object (e.g., eat–food), 'F' otherwise."
  }
};

// Default settings
export const DEFAULT_SETTINGS = {
  showErrorCounts: true,
  numberRange: 10,
  modeType: 'classic',
  isProgressiveMode: true,
  selectedLevel: 1
};
