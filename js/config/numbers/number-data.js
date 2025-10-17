// Number data for stimulus generation (1-1000 items per format)

export const numberData = {
  arabic: Array.from({length: 1000}, (_, i) => {
    const num = i + 1;
    // 70% integers, 30% decimals
    if (Math.random() < 0.7) {
      return num.toString();
    } else {
      // Generate decimals with 1-3 decimal places
      const decimalPlaces = Math.floor(Math.random() * 3) + 1;
      const multiplier = Math.pow(10, decimalPlaces);
      const decimalValue = (Math.random() * num * multiplier) / multiplier;
      return decimalValue.toFixed(decimalPlaces);
    }
  }),
  word: Array.from({length: 1000}, (_, i) => {
    const num = i + 1;
    // 70% integers, 30% decimals
    if (Math.random() < 0.7) {
      if (num <= 20) return ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"][num];
      if (num < 100) {
        const tens = Math.floor(num / 10);
        const ones = num % 10;
        const tensWords = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
        return ones === 0 ? tensWords[tens] : `${tensWords[tens]}-${["","one","two","three","four","five","six","seven","eight","nine"][ones]}`;
      }
      if (num < 1000) {
        const hundreds = Math.floor(num / 100);
        const remainder = num % 100;
        const hundredWord = hundreds === 1 ? "one hundred" : `${["","one","two","three","four","five","six","seven","eight","nine"][hundreds]} hundred`;
        if (remainder === 0) return hundredWord;
        if (remainder <= 20) return `${hundredWord} ${["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"][remainder]}`;
        const tens = Math.floor(remainder / 10);
        const ones = remainder % 10;
        const tensWords = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
        const onesWord = ones === 0 ? "" : `-${["","one","two","three","four","five","six","seven","eight","nine"][ones]}`;
        return `${hundredWord} ${tensWords[tens]}${onesWord}`;
      }
      return "one thousand";
    } else {
      // Generate decimal words
      const decimalPlaces = Math.floor(Math.random() * 3) + 1;
      const multiplier = Math.pow(10, decimalPlaces);
      const decimalValue = (Math.random() * num * multiplier) / multiplier;
      const integerPart = Math.floor(decimalValue);
      const decimalPart = Math.round((decimalValue - integerPart) * multiplier);
      
      let result = "";
      if (integerPart > 0) {
        if (integerPart <= 20) {
          result = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"][integerPart];
        } else if (integerPart < 100) {
          const tens = Math.floor(integerPart / 10);
          const ones = integerPart % 10;
          const tensWords = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
          result = ones === 0 ? tensWords[tens] : `${tensWords[tens]}-${["","one","two","three","four","five","six","seven","eight","nine"][ones]}`;
        } else {
          result = "one hundred";
        }
      }
      
      if (decimalPart > 0) {
        const decimalWords = ["zero","one","two","three","four","five","six","seven","eight","nine"];
        let decimalStr = "";
        const decimalStr_parts = decimalPart.toString().split('');
        for (let i = 0; i < decimalStr_parts.length; i++) {
          decimalStr += decimalWords[parseInt(decimalStr_parts[i])];
          if (i < decimalStr_parts.length - 1) decimalStr += " ";
        }
        result += result ? ` point ${decimalStr}` : `zero point ${decimalStr}`;
      }
      
      return result || "zero";
    }
  }),
  roman: Array.from({length: 1000}, (_, i) => {
    let num = i + 1;
    const values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let result = "";
    for (let j = 0; j < values.length; j++) {
      while (num >= values[j]) {
        result += symbols[j];
        num -= values[j];
      }
    }
    return result;
  }),
  binary: Array.from({length: 1000}, (_, i) => (i + 1).toString(2)),
  hexadecimal: Array.from({length: 1000}, (_, i) => (i + 1).toString(16).toUpperCase()),
  scientific: Array.from({length: 1000}, (_, i) => {
    const num = i + 1;
    if (num < 10) return `${num}×10⁰`;
    if (num < 100) return `${(num/10).toFixed(1)}×10¹`;
    if (num < 1000) return `${(num/100).toFixed(1)}×10²`;
    return `${(num/1000).toFixed(1)}×10³`;
  }),
  // Additional number formats
  fraction: Array.from({length: 1000}, (_, i) => {
    const num = i + 1;
    const denominators = [2,3,4,5,6,7,8,9,10,12,15,16,20,25,50,100];
    const denom = denominators[Math.floor(Math.random() * denominators.length)];
    const numerator = Math.floor(Math.random() * denom) + 1;
    return `${numerator}/${denom}`;
  }),
  ordinal: Array.from({length: 1000}, (_, i) => {
    const num = i + 1;
    const j = num % 10, k = num % 100;
    if (j === 1 && k !== 11) return num + "st";
    if (j === 2 && k !== 12) return num + "nd";
    if (j === 3 && k !== 13) return num + "rd";
    return num + "th";
  }),
  percentage: Array.from({length: 1000}, (_, i) => `${i + 1}%`),
  tally: Array.from({length: 1000}, (_, i) => {
    const num = i + 1;
    const groups = Math.floor(num / 5);
    const remainder = num % 5;
    let result = "";
    for (let j = 0; j < groups; j++) result += "卌";
    for (let j = 0; j < remainder; j++) result += "|";
    return result || "|";
  })
};

