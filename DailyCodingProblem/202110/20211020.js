/*
The edit distance between two strings refers to the minimum number of character insertions,
 deletions, and substitutions required to change one string to the other.
  For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.
*/

// 편집거리 알고리즘 문제이다.

let str1 = "sitting"; //세로 길이
let str2 = "kitten"; //가로 길이
function solution(str1, str2) {
  let arr = Array.from(
    Array(str1.length + 1),
    () => new Array(str2.length + 1)
  );
  for (let i = 0; i < arr.length; i++) {
    arr[i][0] = i;
    for (let j = 1; j < arr[0].length; j++) {
      if (i === 0) {
        arr[0][j] = j;
        continue;
      }
      let w1 = str1.substring(0, i);
      let w2 = str2.substring(0, j);
      if (w1[i - 1] === w2[j - 1]) arr[i][j] = arr[i - 1][j - 1];
      else
        arr[i][j] =
          Math.min(arr[i - 1][j], arr[i][j - 1], arr[i - 1][j - 1]) + 1;
    }
  }
  console.log(arr);
  return arr[arr.length - 1][arr[0].length - 1];
}
console.log(solution(str1, str2));
