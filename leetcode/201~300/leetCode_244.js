/*
Input : String Array(wordsDict), String(word1, word2)
Output : int(the shortest distance between word1 and word2 in the array wordsDict)
Contraints : 
 - 1 <= wordsDict.length <= 3 * 10^4
 - 1 <= wordsDict[i].length <= 10
 - wordsDict[i] consists of lowercase English letters.
 - word1 and word2 are in wordsDict.
 - word1 != word2
 - At most 5000 calls will be made to shortest.
E : x
*/

/*
Time : O(N)
Space : O(N)
ALGO : for
DS : HashMap, Array
*/
var WordDistance = function (wordsDict) {
  this.arr = wordsDict;
  this.map = new Map();
  for (let i = 0; i < wordsDict.length; i++) {
    if (this.map.has(wordsDict[i])) this.map.get(wordsDict[i]).push(i);
    else this.map.set(wordsDict[i], [i]);
  }
};

/*
Time : O(N)
Space : O(1)
ALGO : for, two pointer
DS : HashMap, Array 
*/
WordDistance.prototype.shortest = function (word1, word2) {
  let word1Loc = this.map.get(word1),
    word2Loc = this.map.get(word2),
    min = Infinity;
  let w1 = 0,
    w2 = 0;
  while (w1 < word1Loc.length && w2 < word2Loc.length) {
    min = Math.min(min, Math.abs(word1Loc[w1] - word2Loc[w2]));
    if (word1Loc[w1] < word2Loc[w2]) w1++;
    else w2++;
  }
  return min;
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
