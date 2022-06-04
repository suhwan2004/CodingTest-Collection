var numberOfSubstrings = function (s) {
  let res = 0;
  let a = 0,
    b = 0,
    c = 0;
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") a++;
    else if (s[i] === "b") b++;
    else c++;
    while (a > 0 && b > 0 && c > 0) {
      res += s.length - i;
      if (s[j] === "a") a--;
      else if (s[j] === "b") b--;
      else c--;
      j++;
    }
  }
  return res;
};
