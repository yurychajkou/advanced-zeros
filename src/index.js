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
  let zeros = []
  for (let j = 1; j <= multipliers.length; j++) {
    for (let i = 0; i < maxExp; i++) {
      expCollector[i] = (Math.trunc(number / Math.pow(multipliers[j - 1], i)))

    }
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let expMult = (expCollector.reduce(reducer)) - expCollector[0];;
    let zero = Math.trunc(expMult / exp[j - 1])

    zeros.push(zero)
  }
  zeros.sort(compareZer)
  return zeros[0];
}