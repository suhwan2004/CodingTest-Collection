/*
write a function that takes in a non-empty string and returns its run-length encoding.

From wikipedia, "run-length encoding is a form a lossless data compression in which runs of data are stored as a single data value and count, rather than as the original run.". For this problem, a run of data is any sequence of consecutive, identical characters. So the run "AAA" would be run-length-encoded as "3A".

To make things more complicated, however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, this means that we can't naively run-length-encode long runs. For example, the run "AAAAAAAAAAAA", can't naively be encoded as "12A", since this string can be decoded as either "AAAAAAAAAAAAAA" or "14A". Thus, long runs(runs of 10 or more characters) should be encoded in a split fashion; the aforementioned run should be encoded as "9A3A".

time : O(n)
space : O(map);
*/

const input = "12AA2#AAAAAAAAAAAAAAAAAAAABBCCCCDD";

function solution(input) {
  let cur = "";
  let str = "";
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    let char = input.charCodeAt(i);
    if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
      if (count == 0) {
        cur = input[i];
        count++;
      } else {
        if (cur == input[i]) {
          if (count >= 9) {
            str += `9${cur}`;
            count = count - 9 + 1;
          } else count++;
        } else {
          if (count == 9) str += `9${cur}`;
          else if (count > 9) str += `9${cur}${count - 9}${cur}`;
          else str += `${count}${cur}`;
          cur = input[i];
          count = 1;
        }
      }
    } else {
      if (count != 0) {
        if (count > 9) {
          str += `9${cur}${count - 9}${cur}${input[i]}`;
          cur = "";
          count = 0;
        } else {
          str += `${count}${cur}${input[i]}`;
          cur = "";
          count = 0;
        }
      } else str += `${input[i]}`;
    }
  }
  return str;
}

console.log(solution(input));
