var partitionLabels = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }
  let count = 1;
  let res = [];
  let max = map.get(s[0]);

  for (let i = 0; i < s.length; i++) {
    if (max === i) {
      max = map.get(s[i + 1]);
      res.push(i !== 0 ? count + 1 : count);
      count = 0;
    } else {
      if (map.get(s[i]) > max) max = map.get(s[i]);
      if (i !== 0) count++;
    }
  }
  if (count !== 0) res.push(count);
  return res;
};
