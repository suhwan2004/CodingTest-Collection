var reverseString = function (s) {
  if (s.length === 1) return;

  let i = 0,
    j = s.length - 1;

  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++, j--;
  }
};
