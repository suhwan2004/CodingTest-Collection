/*

start : 3:26 ~ 3:50
Input : s(string)
Output : count of LSWPC
Constraints
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
Edge case : if(s.length === 0) return 0;

Bruth force - find all case
Time : O(N^2)
Space : O(N)
ALGO : for
DS : array, string, hashSet
*/

var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  let set;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    set = new Set();
    let flag = false;
    for (let j = i; j < s.length; j++) {
      if (set.has(s[j])) {
        max = Math.max(max, j - i);
        flag = true;
        break;
      }
      set.add(s[j]);
    }
    if (!flag) max = Math.max(max, s.length - i);
  }
  return max;
};

/*
Optimal Solution

Time : O(N)
Space : O(N)
ALGO : two Pointer, for
DS : string
*/
var lengthOfLongestSubstringOptimal = function (s) {
  if (s.length === 0) return 0;
  let set = new Set();
  let len = 0;
  let max = 0;
  let l = 0,
    r = 0;
  while (r < s.length) {
    if (set.has(s[r])) {
      while (set.has(s[r])) {
        set.delete(s[l++]);
        len--;
      }
    } else {
      set.add(s[r++]);
      len++;
    }
    max = Math.max(len, max);
  }
  return max;
};
