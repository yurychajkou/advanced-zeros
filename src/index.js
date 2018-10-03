module.exports = function getZerosCount(number, base) {
  let i = 0;
  let startDivider = 2;
  let simpleMultiplier = [];

  function compareZer(a, b) {
    return a - b;
  };

  while (startDivider < base) {
    if (base % startDivider == 0) {
      simpleMultiplier[i] = startDivider;
      i++;
      base = base / startDivider;
    } else {
      startDivider++;
    }

  };
  simpleMultiplier[i] = startDivider;

  let exponents = {};
  for (let i = 0; i < simpleMultiplier.length; i++) {
    let x = simpleMultiplier[i];
    if (exponents[x] = exponents[x]) {
      exponents[x]++
    } else {
      exponents[x] = 1
    };
  };

  let mult = Object.keys(exponents);
  let multipliers = JSON.parse("[" + mult + "]");
  let exp = Object.values(exponents);


  let maxExp = 27;
  let expCollector = []

  for (let i = 0; i < maxExp; i++) {
    expCollector[i] = (Math.trunc(number / Math.pow(multipliers[0], i)))

  }

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let expMult = (expCollector.reduce(reducer)) - expCollector[0];;

  let zeeeros = Math.trunc(expMult / exp[0])

  let expCollector1 = []

  for (let i = 0; i < maxExp; i++) {
    expCollector1[i] = (Math.trunc(number / Math.pow(multipliers[1], i)))

  }


  let expMult1 = (expCollector1.reduce(reducer)) - expCollector1[0];;

  let zeeeros1 = Math.trunc(expMult1 / exp[1])

  let expCollector2 = []

  for (let i = 0; i < maxExp; i++) {
    expCollector2[i] = (Math.trunc(number / Math.pow(multipliers[2], i)))

  }

  let expMult2 = (expCollector2.reduce(reducer)) - expCollector1[0];;

  let zeeeros2 = Math.trunc(expMult2 / exp[2])

  let expCollector3 = []

  for (let i = 0; i < maxExp; i++) {
    expCollector3[i] = (Math.trunc(number / Math.pow(multipliers[3], i)))

  }

  let expMult3 = (expCollector3.reduce(reducer)) - expCollector1[0];;

  let zeeeros3 = Math.trunc(expMult3 / exp[3])

  let zer = [zeeeros, zeeeros1, zeeeros2, zeeeros3]

  zer.sort(compareZer)
  return zer[0];

}