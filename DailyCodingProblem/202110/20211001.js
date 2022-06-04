/*
There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2

What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X?
For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
*/

//일단, 1,2 계산만 건너기가 가능할 때의 경우를 생각해서 짜 보겠다.

function solution(N, X) {
  let count = 0;
  dfs(0);
  return count;
  function dfs(cur) {
    if (cur == N) {
      count++;
      return;
    }
    for (let i = 0; i < X.length; i++) {
      if (cur + X[i] <= N) dfs(cur + X[i]);
    }
  }
}

console.log(solution(4, [1, 2, 3]));
