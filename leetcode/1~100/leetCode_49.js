/*
Input : String Array(strs)
Output : String Array(group the Anagram together)
Contraints :
 - 1 <= strs.length <= 10^4
 - 0 <= strs[i].length <= 100
 - strs[i] consists of lowercase English letters 
E : x


Optimal Solution

Time : O(NM), N = strs.length, M = strs[i].length
Space : O(N)
ALGO : for
DS : object
*/

var groupAnagrams = function (strs) {
  let res = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join("#");
    res[key] ? res[key].push(str) : (res[key] = [str]);
  }
  return Object.values(res);
};
