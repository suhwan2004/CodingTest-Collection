/*
Input : String(s)
Output : boolean(return true if a permutation of the string could form a palindrome)
Contraints : 
 - 1 <= s.length <= 5000
 - s consists of only lowercase English letters.
E : x
*/

var canPermutePalindrome = function (s) {
  let len = s.length;
  let map = new Map();
  let flag = true;
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1);
  }
  for (let [k, v] of map) {
    if (len % 2 === 0 && v % 2 === 1) return false;
    if (len % 2 === 1) {
      if (v % 2 === 1) {
        if (flag === false) return false;
        else flag = false;
      }
    }
  }
  return true;
};
