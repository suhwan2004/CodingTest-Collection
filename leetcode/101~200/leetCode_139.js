/*
Input : String(s), String Array(wordDict)
Output : boolean(return true if s can be segmented into a space-separated sequence of one or more dictionary words.)
Contraints : 
 - 1 <= s.length <= 300
 - 1 <= wordDict.length <= 1000
 - 1 <= wordDict[i].length <= 20
 - s and wordDict[i] consist of only lowercase English letters.
 - All the strings of wordDict are unique.
E : x
*/

/*
18:19 ~ 18:39
N === s.length, M === wordDict.length
Time: O(NM)
space : O(M)
ALGO : for
DS : hashMap, Array

망한 케이스를 가정해서 time을 구해보자면

abcdef
a,b,c,d,e,f
요렇게 될 텐데
N은 다 돌고, M을 확인할 때 해봐야 하나씩 확인할 것임.

abcdef
ab,cd,ef 요렇게 있을 때도 상수단위로 확인이 되기 때문에 substring의 계산은 포함하지 않았음.
*/
var wordBreak = function (s, wordDict) {
  let map = new Map();
  let check = new Array(s.length).fill(false); // time, space : O(N)
  for (let i = 0; i < wordDict.length; i++) {
    //time, space : O(M)
    if (map.has(wordDict[i][wordDict[i].length - 1])) {
      let arr = map.get(wordDict[i][wordDict[i].length - 1]);
      arr.push(wordDict[i]);
      map.set(wordDict[i][wordDict[i].length - 1], arr);
    } else {
      map.set(wordDict[i][wordDict[i].length - 1], [wordDict[i]]);
    }
  }
  for (let i = s.length - 1; i >= 0; i--) {
    // O(N)
    if (map.has(s[i])) {
      for (let word of map.get(s[i])) {
        // O(M)
        if (
          i - word.length + 1 >= 0 &&
          word === s.substring(i - word.length + 1, i + 1) &&
          (check[i] || i === s.length - 1)
        ) {
          if (i - word.length === -1) return true;
          check[i - word.length] = true;
        }
      }
    }
  }
  return false;
};
