/*
Input : String(s)
Output : int(length of the longest substring that contains at most two distinct characters)
Contraints : 
 - 1 <= s.length <= 10^5
 - s consists of English letters.
E : x
*/

/*
Time : O(2N) => O(N)
Space : O(N)
ALGO : two pointer
DS : hashMap
*/
var lengthOfLongestSubstringTwoDistinct = function (s) {
  let map = new Map();
  let max = 0;
  let loc = 0;
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i]) && map.size === 2) {
      max = Math.max(i - loc, max);
      while (map.size !== 1) {
        map.get(s[loc]) === 1
          ? map.delete(s[loc])
          : map.set(s[loc], map.get(s[loc]) - 1);
        loc++;
      }
    }
    map.set(s[i], map.get(s[i]) + 1 || 1);
  }
  return Math.max(s.length - loc, max);
};
