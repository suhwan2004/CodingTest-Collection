var findPermutation = function (s) {
  let arr = [];
  for (let i = 1; i <= s.length + 1; i++) {
    arr.push(i);
  }

  let f = 0,
    e = 0;
  while (e < s.length) {
    if (s[f] === s[e]) {
      if (s[f] === "I") f++, e++;
      else e++;
    } else {
      while (s[e] === "D") {
        e++;
      }
      for (let i = 0; i < Math.round((e - f) / 2); i++) {
        [arr[f + i], arr[e - i]] = [arr[e - i], arr[f + i]];
      }
      f = e;
    }
  }
  if (f !== e) {
    for (let i = 0; i < Math.round((e - f) / 2); i++) {
      [arr[f + i], arr[e - i]] = [arr[e - i], arr[f + i]];
    }
  }
  return arr;
};
