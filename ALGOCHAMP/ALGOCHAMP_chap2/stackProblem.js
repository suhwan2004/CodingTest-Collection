/*

[2,5,-3,-4,6,7,2]
*/

let input = [2, 5, -3, -4, 6, 7, 2];

function solution(input) {
  let l = 0,
    r = 0,
    max = -Infinity;
  while (l < input.length) {
    max = Math.max(max, input[r % input.length]);
    if (l == r) r++;
    else {
      if (input[l] == max && r >= input.length - 1) {
        input[l++] = -1;
        r = l;
      } else if (input[r % input.length] > input[l])
        input[l++] = input[r % input.length];
      else r++;
    }
  }
  return input;
}

console.log(solution(input));
