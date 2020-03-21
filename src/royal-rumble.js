function romanToNum(roman) {
  if (roman === "")           return 0;
  if (roman.startsWith("L"))  return 50 + romanToNum(roman.substr(1));
  if (roman.startsWith("XL")) return 40 + romanToNum(roman.substr(2));
  if (roman.startsWith("X"))  return 10 + romanToNum(roman.substr(1));
  if (roman.startsWith("IX")) return 9  + romanToNum(roman.substr(2));
  if (roman.startsWith("V"))  return 5  + romanToNum(roman.substr(1));
  if (roman.startsWith("IV")) return 4  + romanToNum(roman.substr(2));
  if (roman.startsWith("I"))  return 1  + romanToNum(roman.substr(1));
  return 0;
}

module.exports = function royalRumble(inputs) {
  return inputs
    .map(n => {
      const splitted = n.split(' ');
      const roman = splitted.pop();
      const name = splitted.join(' ');

      return [n, name, romanToNum(roman)];
    })
    .sort((a, b) => {
      const compare = a[1].localeCompare(b[1]);

      if (compare === 0) return a[2] - b[2];
      return compare;
    })
    .map(n => n[0]);
}
