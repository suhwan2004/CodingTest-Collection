/*
 start : 19:45 ~ 20:50
*/

function Main() {
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map((cur) => Number(cur));

  let result = 0;
  if (input[2] != 0) {
    let a = Math.ceil(input[2] / input[1]); //중간점의 높이
    let b = input[2] % input[1] === 0 ? input[1] : input[2] % input[1]; //중간점의 가로길
    console.log(a, b, input[0] - a + 1, input[1] - b + 1);
    result += getSum(a, b) * getSum(input[0] - a + 1, input[1] - b + 1);
  } else {
    result += getSum(input[0], input[1]);
  }

  console.log(result);
}

function getSum(r, c) {
  if (r == 1 || c == 1) return 1;
  let arr = [];
  for (let i = 0; i < r; i++) {
    arr[i] = [];
    for (let j = 0; j < c; j++) {
      arr[i][j] = i == 0 || j == 0 ? 1 : arr[i - 1][j] + arr[i][j - 1];
    }
  }
  return arr[r - 1][c - 1];
}

Main();
