/*
Input : String Array(wordsDict), String(word1), String(word2)
Output : int(the shortest distance between these two words in the list)
Contraints : 
 - 1 <= wordsDict.length <= 3 * 104
 - 1 <= wordsDict[i].length <= 10
 - wordsDict[i] consists of lowercase English letters.
 - word1 and word2 are in wordsDict.
 - word1 != word2
E : x
*/

/*
Optimal Solution
Time : O(NM)
Space : O(1)
ALGO : for
DS : Array
*/

var shortestDistance = function (wordsDict, word1, word2) {
  let word1Dis = -1;
  let word2Dis = -1;
  let min = Infinity;
  for (let i = 0; i < wordsDict.length; i++) {
    if (word1 === wordsDict[i]) word1Dis = i;
    if (word2 === wordsDict[i]) word2Dis = i;
    if (word1Dis !== -1 && word2Dis !== -1)
      min = Math.min(min, Math.abs(word1Dis - word2Dis));
  }
  return min;
};
