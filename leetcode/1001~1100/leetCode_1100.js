var numKLenSubstrNoRepeats = function (s, k) {
  let arr = new Array(26).fill(0);
  let count = 0;

  for (let i = 0; i < k; i++) {
    arr[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < s.length - k + 1; i++) {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 1) {
        flag = false;
        break;
      }
    }
    count = flag ? count + 1 : count;
    arr[s.charCodeAt(i) - 97]--;
    arr[s.charCodeAt(i + k) - 97]++;
  }
  return count;
};
