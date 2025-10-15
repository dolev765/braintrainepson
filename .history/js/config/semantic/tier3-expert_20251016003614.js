// Tier 3 - Expert Knowledge Semantic Categories (Default off)

export const tier3Categories = {
// TIER 3 - EXPERT KNOWLEDGE (Default off): Specialized knowledge
  geography: [
    // Related pairs (50)
    ["France","Paris"],["Germany","Berlin"],["Italy","Rome"],["Spain","Madrid"],["Portugal","Lisbon"],
    ["United Kingdom","London"],["Ireland","Dublin"],["Netherlands","Amsterdam"],["Belgium","Brussels"],["Switzerland","Bern"],
    ["Austria","Vienna"],["Poland","Warsaw"],["Czech Republic","Prague"],["Hungary","Budapest"],["Romania","Bucharest"],
    ["Bulgaria","Sofia"],["Greece","Athens"],["Turkey","Ankara"],["Russia","Moscow"],["Ukraine","Kyiv"],
    ["Japan","Tokyo"],["China","Beijing"],["South Korea","Seoul"],["North Korea","Pyongyang"],["Mongolia","Ulaanbaatar"],
    ["India","New Delhi"],["Pakistan","Islamabad"],["Bangladesh","Dhaka"],["Sri Lanka","Colombo"],["Nepal","Kathmandu"],
    ["Thailand","Bangkok"],["Vietnam","Hanoi"],["Cambodia","Phnom Penh"],["Laos","Vientiane"],["Myanmar","Naypyidaw"],
    ["Malaysia","Kuala Lumpur"],["Singapore","Singapore"],["Indonesia","Jakarta"],["Philippines","Manila"],["Brunei","Bandar Seri Begawan"],
    ["Australia","Canberra"],["New Zealand","Wellington"],["Papua New Guinea","Port Moresby"],["Fiji","Suva"],["Samoa","Apia"],
    ["Canada","Ottawa"],["Mexico","Mexico City"],["Brazil","Brasília"],["Argentina","Buenos Aires"],["Chile","Santiago"],
    // Unrelated pairs (50)
    ["France","Berlin"],["Germany","Rome"],["Italy","Madrid"],["Spain","Lisbon"],["Portugal","London"],
    ["United Kingdom","Dublin"],["Ireland","Amsterdam"],["Netherlands","Brussels"],["Belgium","Bern"],["Switzerland","Vienna"],
    ["Austria","Warsaw"],["Poland","Prague"],["Czech Republic","Budapest"],["Hungary","Bucharest"],["Romania","Sofia"],
    ["Bulgaria","Athens"],["Greece","Ankara"],["Turkey","Moscow"],["Russia","Kyiv"],["Ukraine","Tokyo"],
    ["Japan","Beijing"],["China","Seoul"],["South Korea","Pyongyang"],["North Korea","Ulaanbaatar"],["Mongolia","New Delhi"],
    ["India","Islamabad"],["Pakistan","Dhaka"],["Bangladesh","Colombo"],["Sri Lanka","Kathmandu"],["Nepal","Bangkok"],
    ["Thailand","Hanoi"],["Vietnam","Phnom Penh"],["Cambodia","Vientiane"],["Laos","Naypyidaw"],["Myanmar","Kuala Lumpur"],
    ["Malaysia","Singapore"],["Singapore","Jakarta"],["Indonesia","Manila"],["Philippines","Bandar Seri Begawan"],["Brunei","Canberra"],
    ["Australia","Wellington"],["New Zealand","Port Moresby"],["Papua New Guinea","Suva"],["Fiji","Apia"],["Samoa","Ottawa"],
    ["Canada","Mexico City"],["Mexico","Brasília"],["Brazil","Buenos Aires"],["Argentina","Santiago"],["Chile","Paris"]
  ],

  science: [
    // Related pairs (50)
    ["hydrogen","H"],["helium","He"],["lithium","Li"],["beryllium","Be"],["boron","B"],
    ["carbon","C"],["nitrogen","N"],["oxygen","O"],["fluorine","F"],["neon","Ne"],
    ["sodium","Na"],["magnesium","Mg"],["aluminum","Al"],["silicon","Si"],["phosphorus","P"],
    ["sulfur","S"],["chlorine","Cl"],["argon","Ar"],["potassium","K"],["calcium","Ca"],
    ["Einstein","relativity"],["Newton","gravity"],["Darwin","evolution"],["Pasteur","pasteurization"],["Curie","radioactivity"],
    ["Tesla","electricity"],["Edison","light bulb"],["Bell","telephone"],["Wright","airplane"],["Marconi","radio"],
    ["Mendel","genetics"],["Watson","DNA"],["Crick","DNA"],["Fleming","penicillin"],["Salk","polio vaccine"],
    ["Hubble","telescope"],["Galileo","telescope"],["Copernicus","heliocentrism"],["Kepler","planetary motion"],["Brahe","astronomy"],
    ["Lavoisier","chemistry"],["Mendeleev","periodic table"],["Boyle","gas law"],["Avogadro","mole"],["Dalton","atomic theory"],
    ["Maxwell","electromagnetism"],["Faraday","electromagnetic induction"],["Volta","battery"],["Ampere","electric current"],["Ohm","resistance"],
    ["Joule","energy"],["Watt","power"],["Kelvin","temperature"],["Celsius","temperature"],["Fahrenheit","temperature"],
    // Unrelated pairs (50)
    ["hydrogen","He"],["helium","Li"],["lithium","Be"],["beryllium","B"],["boron","C"],
    ["carbon","N"],["nitrogen","O"],["oxygen","F"],["fluorine","Ne"],["neon","Na"],
    ["sodium","Mg"],["magnesium","Al"],["aluminum","Si"],["silicon","P"],["phosphorus","S"],
    ["sulfur","Cl"],["chlorine","Ar"],["argon","K"],["potassium","Ca"],["calcium","H"],
    ["Einstein","gravity"],["Newton","relativity"],["Darwin","pasteurization"],["Pasteur","evolution"],["Curie","light bulb"],
    ["Tesla","telephone"],["Edison","electricity"],["Bell","airplane"],["Wright","radio"],["Marconi","genetics"],
    ["Mendel","DNA"],["Watson","penicillin"],["Crick","polio vaccine"],["Fleming","telescope"],["Salk","heliocentrism"],
    ["Hubble","planetary motion"],["Galileo","astronomy"],["Copernicus","chemistry"],["Kepler","periodic table"],["Brahe","gas law"],
    ["Lavoisier","mole"],["Mendeleev","atomic theory"],["Boyle","electromagnetism"],["Avogadro","electromagnetic induction"],["Dalton","battery"],
    ["Maxwell","electric current"],["Faraday","resistance"],["Volta","energy"],["Ampere","power"],["Ohm","temperature"],
    ["Joule","temperature"],["Watt","temperature"],["Kelvin","temperature"],["Celsius","temperature"],["Fahrenheit","temperature"]
  ],

  // NEW: Advanced Expert Categories (Research-Aligned)
  neurocognitive: [
    // Related pairs - Neurocognitive processes (50)
    ["attention","focus"],["memory","recall"],["perception","awareness"],["cognition","thinking"],["execution","performance"],
    ["inhibition","suppression"],["flexibility","adaptability"],["planning","strategy"],["monitoring","supervision"],["updating","revision"],
    ["working memory","short-term"],["long-term","persistent"],["episodic","event"],["semantic","meaning"],["procedural","automatic"],
    ["declarative","explicit"],["implicit","unconscious"],["conscious","aware"],["unconscious","automatic"],["automatic","effortless"],
    ["controlled","effortful"],["effortful","intentional"],["intentional","deliberate"],["deliberate","planned"],["planned","strategic"],
    ["strategic","tactical"],["tactical","methodical"],["methodical","systematic"],["systematic","organized"],["organized","structured"],
    ["structured","patterned"],["patterned","regular"],["regular","consistent"],["consistent","stable"],["stable","reliable"],
    ["reliable","dependable"],["dependable","trustworthy"],["trustworthy","credible"],["credible","valid"],["valid","accurate"],
    ["accurate","precise"],["precise","exact"],["exact","specific"],["specific","particular"],["particular","individual"],
    ["individual","unique"],["unique","distinctive"],["distinctive","characteristic"],["characteristic","typical"],["typical","normal"],
    // Unrelated pairs - No clear neurocognitive relationship (50)
    ["attention","memory"],["focus","recall"],["awareness","thinking"],["cognition","performance"],["execution","suppression"],
    ["inhibition","adaptability"],["flexibility","strategy"],["planning","supervision"],["monitoring","revision"],["updating","short-term"],
    ["working memory","persistent"],["long-term","event"],["episodic","meaning"],["semantic","automatic"],["procedural","explicit"],
    ["declarative","unconscious"],["implicit","aware"],["conscious","automatic"],["unconscious","effortless"],["automatic","effortful"],
    ["controlled","intentional"],["effortful","deliberate"],["intentional","planned"],["deliberate","strategic"],["planned","tactical"],
    ["strategic","methodical"],["tactical","systematic"],["methodical","organized"],["systematic","structured"],["organized","patterned"],
    ["structured","regular"],["patterned","consistent"],["regular","stable"],["consistent","reliable"],["stable","dependable"],
    ["reliable","trustworthy"],["dependable","credible"],["trustworthy","valid"],["credible","accurate"],["valid","precise"],
    ["accurate","exact"],["precise","specific"],["exact","particular"],["specific","individual"],["particular","unique"],
    ["individual","distinctive"],["unique","characteristic"],["distinctive","typical"],["characteristic","normal"],["typical","attention"]
  ],

  metacognitive: [
    // Related pairs - Metacognitive processes (50)
    ["metacognition","self-awareness"],["self-regulation","control"],["self-monitoring","observation"],["self-evaluation","assessment"],["self-reflection","contemplation"],
    ["metamemory","memory awareness"],["metacomprehension","understanding awareness"],["metacommunication","communication awareness"],["metalinguistic","language awareness"],["metacognitive","cognition awareness"],
    ["strategy","approach"],["approach","method"],["method","technique"],["technique","procedure"],["procedure","process"],
    ["process","operation"],["operation","function"],["function","mechanism"],["mechanism","system"],["system","framework"],
    ["framework","structure"],["structure","organization"],["organization","arrangement"],["arrangement","configuration"],["configuration","pattern"],
    ["pattern","design"],["design","plan"],["plan","scheme"],["scheme","strategy"],["strategy","tactic"],
    ["tactic","approach"],["approach","method"],["method","technique"],["technique","procedure"],["procedure","process"],
    ["process","operation"],["operation","function"],["function","mechanism"],["mechanism","system"],["system","framework"],
    ["framework","structure"],["structure","organization"],["organization","arrangement"],["arrangement","configuration"],["configuration","pattern"],
    ["pattern","design"],["design","plan"],["plan","scheme"],["scheme","strategy"],["strategy","tactic"],
    // Unrelated pairs - No clear metacognitive relationship (50)
    ["metacognition","control"],["self-awareness","observation"],["self-regulation","assessment"],["self-monitoring","contemplation"],["self-evaluation","memory awareness"],
    ["self-reflection","understanding awareness"],["metamemory","communication awareness"],["metacomprehension","language awareness"],["metacommunication","cognition awareness"],["metalinguistic","approach"],
    ["metacognitive","method"],["strategy","technique"],["approach","procedure"],["method","process"],["technique","operation"],
    ["procedure","function"],["process","mechanism"],["operation","system"],["function","framework"],["mechanism","structure"],
    ["system","organization"],["framework","arrangement"],["structure","configuration"],["organization","pattern"],["arrangement","design"],
    ["configuration","plan"],["pattern","scheme"],["design","strategy"],["plan","tactic"],["scheme","approach"],
    ["strategy","method"],["tactic","technique"],["approach","procedure"],["method","process"],["technique","operation"],
    ["procedure","function"],["process","mechanism"],["operation","system"],["function","framework"],["mechanism","structure"],
    ["system","organization"],["framework","arrangement"],["structure","configuration"],["organization","pattern"],["arrangement","design"],
    ["configuration","plan"],["pattern","scheme"],["design","strategy"],["plan","tactic"],["scheme","metacognition"]
  ]
};
