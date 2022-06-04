var countLetters = function (s) {
  let sum = 0;
  let cur = s[0],
    count = 1;
  for (let i = 1; i < s.length; i++) {
    if (cur !== s[i]) {
      cur = s[i];
      sum += makeVal(count);
      count = 1;
    } else count++;
  }
  sum += makeVal(count);
  return sum;
  function makeVal(end) {
    let curSum = 0;
    for (let j = 1; j <= end; j++) {
      curSum += j;
    }
    return curSum;
  }
};
