/*
start : 19:55 ~ 20:06
I : 2 String
O : int array
C : ...
Edge case : x
*/

var findAnagrams = function (s, p) {
  let sArr = new Array(26).fill(0);
  let pArr = new Array(26).fill(0);
  let res = [];
  let point = 0;
  for (let i = 0; i < p.length; i++) {
    pArr[p.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < s.length; i++) {
    let flag = true;
    sArr[s.charCodeAt(i) - 97]++;
    if (i < p.length - 1) continue;
    for (let j = 0; j < sArr.length; j++) {
      if (sArr[j] !== pArr[j]) {
        flag = false;
        break;
      }
    }

    if (flag) res.push(i - p.length + 1);
    sArr[s.charCodeAt(point) - 97]--;
    point++;
  }

  return res;
};
