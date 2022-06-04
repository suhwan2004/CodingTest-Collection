/*
Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.
*/

//모모형이 줬던 문제의 하위 난이도 버전이라고 볼 수 있음.
let input = "AAAABBBCCDAA";

function solution(input) {
  let str = "";
  let char = "";
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (count === 0) {
      char = input[i];
      count++;
    } else {
      if (char !== input[i]) {
        str += `${count}${char}`;
        char = input[i];
        count = 1;
      } else count++;
    }
  }
  return str + `${count}${char}`;
}

console.log(solution(input));
