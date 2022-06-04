/*
Input : String Array(wordsDict), 2 String(word1, word2)
Output : int(the shortest distance between these two words in the list)
Contraints : 
 - 1 <= wordsDict.length <= 10^5
 - 1 <= wordsDict[i].length <= 10
 - wordsDict[i] consists of lowercase English letters.
 - word1 and word2 are in wordsDict.
E : x
*/

/*
Time : O(NM) => for + String comparison
Space : O(1)
ALGO : for
DS : Array
*/
var shortestWordDistance = function (wordsDict, word1, word2) {
  let min = Infinity;
  let loc = -1,
    loc1 = -1;
  if (word1 === word2) {
    for (let i = 0; i < wordsDict.length; i++) {
      if (wordsDict[i] === word1) {
        if (loc !== -1) min = Math.min(min, Math.abs(loc - i));
        loc = i;
      }
    }
    return min;
  } else {
    for (let i = 0; i < wordsDict.length; i++) {
      if (wordsDict[i] === word1) loc = i;
      else if (wordsDict[i] === word2) loc1 = i;

      if (loc !== -1 && loc1 !== -1) min = Math.min(min, Math.abs(loc1 - loc));
    }
    return min;
  }
};
