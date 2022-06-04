/*
Input : String(s)
Output : Array(Repeated DNA Sequences)
Contraints :
 - 1 <= s.length <= 10^5
 - s[i] is either 'A', 'C', 'G', or 'T'. 
E : x
*/

/*
Time : O(N)
Space : O(N)
ALGO : for
DS : HashMap, HashSet
*/

var findRepeatedDnaSequences = function (s) {
  let visited = new Set();
  let ans = new Set();

  for (let i = 0; i < s.length - 9; i++) {
    let curr = s.slice(i, 10 + i);
    if (visited.has(curr)) ans.add(curr);
    visited.add(curr);
  }
  return [...ans];
};
