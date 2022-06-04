var getModifiedArray = function (length, updates) {
  const res = new Array(length).fill(0);
  for (const [start, end, val] of updates) {
    res[start] += val;
    if (end < length - 1) {
      res[end + 1] -= val;
    }
  }
  for (let i = 1; i < length; i++) {
    res[i] = res[i - 1] + res[i];
  }

  return res;
};
