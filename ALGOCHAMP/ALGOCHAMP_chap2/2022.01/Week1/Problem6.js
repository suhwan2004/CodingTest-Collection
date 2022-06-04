/*
Problem Statement #
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

Intervals: [[1,4], [2,5], [7,9]]
Intervals: [[6,7], [2,4], [5,9]]
Intervals: [[1,4], [2,6], [3,5]]

start : 11:13 ~ 11:27

I : Int 2d array
O : Int 2d array
C : input.length > 1
E : ??

DS : Array
ALGo : Sort
Time : O(NlogN)
Space : O(2N) => O(N)
*/

function solution(input) {
  if (input.length === 1) return input;
  let result = [];
  input.sort((a, b) => a[0] - b[0]);

  result.push(input[0]);
  for (let i = 1; i < input.length; i++) {
    let resultVal = result[result.length - 1][1];
    let curIndexFirst = input[i][0];
    let curIndexLast = input[i][1];

    if (resultVal < curIndexFirst) result.push(input[i]);
    else {
      if (resultVal >= curIndexLast) continue;
      else result[result.length - 1][1] = curIndexLast;
    }
  }
  return result;
}

console.log(
  solution([
    [1, 4],
    [2, 5],
    [7, 9],
  ])
);

console.log(
  solution([
    [6, 7],
    [2, 4],
    [5, 9],
  ])
);

console.log(
  solution([
    [1, 4],
    [2, 6],
    [3, 5],
  ])
);
