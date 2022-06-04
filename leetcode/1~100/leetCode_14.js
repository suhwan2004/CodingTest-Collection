/*
Input : String Array(strs...)
Output : String(Longest Common Prefix)
Constraints : 
 - 1 <= strs.length <= 200
 - 0 <= strs[i].length <= 200
 - strs[i] consists of only lower-case English letters.
E : if(strs.length === 1) return true;

Bruth force
time : O(N^2)
space : O(N)
ALGO : for
DS : Array
*/
var longestCommonPrefix = function (strs) {
  if (strs.length == 1) return strs[0];
  let word = strs[0];
  let count;
  for (let i = 1; i < strs.length; i++) {
    count = 0;
    if (word === strs[i]) continue;
    else {
      for (
        let j = 0;
        j < strs[i].length > word.length ? strs[i].length : word.length;
        j++
      ) {
        if (strs[i][j] === word[j]) count++;
        else break;
      }
      word = word.substring(0, count);
    }
  }
  return word;
};
