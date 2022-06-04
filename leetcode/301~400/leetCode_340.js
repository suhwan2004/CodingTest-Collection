var lengthOfLongestSubstringKDistinct = function (s, k) {
  let max = 0,
    max1 = 0;
  let map = new Map();
  let l = 0,
    curLen = 0;
  for (let j = 0; j < s.length; j++) {
    if (!map.has(s[j])) {
      map.set(s[j], 1);
      curLen++;
    } else {
      map.set(s[j], map.get(s[j]) + 1);
      curLen++;
    }

    while (map.size > k) {
      map.set(s[l], map.get(s[l]) - 1);
      if (map.get(s[l]) === 0) map.delete(s[l]);
      curLen--;
      l++;
    }
    max = Math.max(max, curLen);
  }
  return max;
};
