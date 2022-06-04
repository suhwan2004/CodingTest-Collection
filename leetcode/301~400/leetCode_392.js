var isSubsequence = function (s, t) {
  let point = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[point] === t[i]) point++;
  }
  return point === s.length ? true : false;
};
