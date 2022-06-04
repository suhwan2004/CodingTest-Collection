var balancedStringSplit = function (s) {
  let match = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "R") match++;
    else match--;
    if (match == 0) count++;
  }
  return count;
};
