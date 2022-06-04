/*
Input : string Array(strings)
Output : String 2d Array(group all strings[i] that belong to the same shifting sequence)
Contraints : 
 - 1 <= strings.length <= 200
 - 1 <= strings[i].length <= 50
 - strings[i] consists of lowercase English letters.
E : x 
*/

/*
Time : O(NM)
Space : O(NM)
ALGO : for
DS : HashMap, Array
*/

var groupStrings = function (strings) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < strings.length; i++) {
    let pattern = "";
    let curWord = strings[i];
    for (let j = 1; j < curWord.length; j++) {
      let curChar = curWord.charCodeAt(j);
      let prevChar =
        curChar < curWord.charCodeAt(j - 1)
          ? curWord.charCodeAt(j - 1) - 26
          : curWord.charCodeAt(j - 1);
      pattern += `${curChar - prevChar},`;
    }
    map.has(pattern)
      ? map.get(pattern).push(curWord)
      : map.set(pattern, [curWord]);
  }

  return Array.from(map.values());
};
