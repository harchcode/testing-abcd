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

export default function royalRumble(inputs) {
  return inputs
    .map(n => [n, romanToNum(n.split(' ').pop())])
    .sort((a, b) => a[1] - b[1])
    .map(n => n[0]);
}
