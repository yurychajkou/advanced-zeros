module.exports = function getZerosCount(number, base) {
  let i = 0;
  let startDivider = 2;
  let simpleMultiplier = [];
  let exponent = [];
  let expCount = 1;

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

   function compareSimpleMultiplier(a, b) {
    return a + b;
  }
  simpleMultiplier.sort(compareSimpleMultiplier);
   {
    let ZerosCount = 0;
    while (number > 0) {
      number = Math.trunc(number / simpleMultiplier[0]);
      ZerosCount = ZerosCount + number;

    }
    return ZerosCount;

  }
}