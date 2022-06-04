/*
시간 : O(1)
공간 : O(1)
*/

function solution(input) {
  let length = input.length;
  for (let i = 0; i < length; i++) {
    // O(n)이지만 정적길이는 정해져 있기때문에 시간복잡도에 포함하지 않음.
    if (input[i] == 0) {
      input.splice(i, 1);
      input.push(0);
      length--;
      i--;
    }
  }
  return input;
}
console.log(solution([1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]));
