// Configuration file - Contains all game constants and settings

// Extended number data for stimulus generation (1-100)
export const numberData = {
  arabic: [
    "1","2","3","4","5","6","7","8","9","10",
    "11","12","13","14","15","16","17","18","19","20",
    "21","22","23","24","25","26","27","28","29","30",
    "31","32","33","34","35","36","37","38","39","40",
    "41","42","43","44","45","46","47","48","49","50",
    "51","52","53","54","55","56","57","58","59","60",
    "61","62","63","64","65","66","67","68","69","70",
    "71","72","73","74","75","76","77","78","79","80",
    "81","82","83","84","85","86","87","88","89","90",
    "91","92","93","94","95","96","97","98","99","100"
  ],
  word: [
    "one","two","three","four","five","six","seven","eight","nine","ten",
    "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty",
    "twenty-one","twenty-two","twenty-three","twenty-four","twenty-five","twenty-six","twenty-seven","twenty-eight","twenty-nine","thirty",
    "thirty-one","thirty-two","thirty-three","thirty-four","thirty-five","thirty-six","thirty-seven","thirty-eight","thirty-nine","forty",
    "forty-one","forty-two","forty-three","forty-four","forty-five","forty-six","forty-seven","forty-eight","forty-nine","fifty",
    "fifty-one","fifty-two","fifty-three","fifty-four","fifty-five","fifty-six","fifty-seven","fifty-eight","fifty-nine","sixty",
    "sixty-one","sixty-two","sixty-three","sixty-four","sixty-five","sixty-six","sixty-seven","sixty-eight","sixty-nine","seventy",
    "seventy-one","seventy-two","seventy-three","seventy-four","seventy-five","seventy-six","seventy-seven","seventy-eight","seventy-nine","eighty",
    "eighty-one","eighty-two","eighty-three","eighty-four","eighty-five","eighty-six","eighty-seven","eighty-eight","eighty-nine","ninety",
    "ninety-one","ninety-two","ninety-three","ninety-four","ninety-five","ninety-six","ninety-seven","ninety-eight","ninety-nine","one hundred"
  ],
  roman: [
    "I","II","III","IV","V","VI","VII","VIII","IX","X",
    "XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX",
    "XXI","XXII","XXIII","XXIV","XXV","XXVI","XXVII","XXVIII","XXIX","XXX",
    "XXXI","XXXII","XXXIII","XXXIV","XXXV","XXXVI","XXXVII","XXXVIII","XXXIX","XL",
    "XLI","XLII","XLIII","XLIV","XLV","XLVI","XLVII","XLVIII","XLIX","L",
    "LI","LII","LIII","LIV","LV","LVI","LVII","LVIII","LIX","LX",
    "LXI","LXII","LXIII","LXIV","LXV","LXVI","LXVII","LXVIII","LXIX","LXX",
    "LXXI","LXXII","LXXIII","LXXIV","LXXV","LXXVI","LXXVII","LXXVIII","LXXIX","LXXX",
    "LXXXI","LXXXII","LXXXIII","LXXXIV","LXXXV","LXXXVI","LXXXVII","LXXXVIII","LXXXIX","XC",
    "XCI","XCII","XCIII","XCIV","XCV","XCVI","XCVII","XCVIII","XCIX","C"
  ],
  // Additional number formats
  binary: [
    "1","10","11","100","101","110","111","1000","1001","1010",
    "1011","1100","1101","1110","1111","10000","10001","10010","10011","10100",
    "10101","10110","10111","11000","11001","11010","11011","11100","11101","11110",
    "11111","100000","100001","100010","100011","100100","100101","100110","100111","101000",
    "101001","101010","101011","101100","101101","101110","101111","110000","110001","110010",
    "110011","110100","110101","110110","110111","111000","111001","111010","111011","111100",
    "111101","111110","111111","1000000","1000001","1000010","1000011","1000100","1000101","1000110",
    "1000111","1001000","1001001","1001010","1001011","1001100","1001101","1001110","1001111","1010000",
    "1010001","1010010","1010011","1010100","1010101","1010110","1010111","1011000","1011001","1011010",
    "1011011","1011100","1011101","1011110","1011111","1100000","1100001","1100010","1100011","1100100"
  ],
  hexadecimal: [
    "1","2","3","4","5","6","7","8","9","A",
    "B","C","D","E","F","10","11","12","13","14",
    "15","16","17","18","19","1A","1B","1C","1D","1E",
    "1F","20","21","22","23","24","25","26","27","28",
    "29","2A","2B","2C","2D","2E","2F","30","31","32",
    "33","34","35","36","37","38","39","3A","3B","3C",
    "3D","3E","3F","40","41","42","43","44","45","46",
    "47","48","49","4A","4B","4C","4D","4E","4F","50",
    "51","52","53","54","55","56","57","58","59","5A",
    "5B","5C","5D","5E","5F","60","61","62","63","64"
  ],
  scientific: [
    "1×10⁰","2×10⁰","3×10⁰","4×10⁰","5×10⁰","6×10⁰","7×10⁰","8×10⁰","9×10⁰","1×10¹",
    "1.1×10¹","1.2×10¹","1.3×10¹","1.4×10¹","1.5×10¹","1.6×10¹","1.7×10¹","1.8×10¹","1.9×10¹","2×10¹",
    "2.1×10¹","2.2×10¹","2.3×10¹","2.4×10¹","2.5×10¹","2.6×10¹","2.7×10¹","2.8×10¹","2.9×10¹","3×10¹",
    "3.1×10¹","3.2×10¹","3.3×10¹","3.4×10¹","3.5×10¹","3.6×10¹","3.7×10¹","3.8×10¹","3.9×10¹","4×10¹",
    "4.1×10¹","4.2×10¹","4.3×10¹","4.4×10¹","4.5×10¹","4.6×10¹","4.7×10¹","4.8×10¹","4.9×10¹","5×10¹",
    "5.1×10¹","5.2×10¹","5.3×10¹","5.4×10¹","5.5×10¹","5.6×10¹","5.7×10¹","5.8×10¹","5.9×10¹","6×10¹",
    "6.1×10¹","6.2×10¹","6.3×10¹","6.4×10¹","6.5×10¹","6.6×10¹","6.7×10¹","6.8×10¹","6.9×10¹","7×10¹",
    "7.1×10¹","7.2×10¹","7.3×10¹","7.4×10¹","7.5×10¹","7.6×10¹","7.7×10¹","7.8×10¹","7.9×10¹","8×10¹",
    "8.1×10¹","8.2×10¹","8.3×10¹","8.4×10¹","8.5×10¹","8.6×10¹","8.7×10¹","8.8×10¹","8.9×10¹","9×10¹",
    "9.1×10¹","9.2×10¹","9.3×10¹","9.4×10¹","9.5×10¹","9.6×10¹","9.7×10¹","9.8×10¹","9.9×10¹","1×10²"
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
