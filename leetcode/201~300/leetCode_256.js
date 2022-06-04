/*
Input : int 2d Array(costs)
Output : int( the minimum cost to paint all houses )
Contraints : 
 - costs.length == n
 - costs[i].length == 3
 - 1 <= n <= 100
 - 1 <= costs[i][j] <= 20
E : x 
*/

var minCost1 = function (costs) {
  let min = Infinity;
  for (let i = 0; i < costs[0].length; i++) {
    dfs(costs[0][i], 1, i);
  }

  return min;

  function dfs(curVal, loc, prev) {
    if (costs.length === loc) {
      min = Math.min(curVal, min);
      return;
    }

    for (let i = 0; i < costs[loc].length; i++) {
      if (prev === i) continue;
      if (curVal + costs[loc][i] < min) dfs(curVal + costs[loc][i], loc + 1, i);
    }
  }
};

var minCost2 = function (costs) {
  const memo = {};

  function paint(n, color) {
    if (memo[`${n},${color}`]) return memo[`${n},${color}`];
    if (n === costs.length) return 0;
    let total = costs[n][color];
    switch (color) {
      case 0:
        total += Math.min(paint(n + 1, 1), paint(n + 1, 2));
        break;
      case 1:
        total += Math.min(paint(n + 1, 0), paint(n + 1, 2));
        break;
      case 2:
        total += Math.min(paint(n + 1, 1), paint(n + 1, 0));
    }

    memo[`${n},${color}`] = total;
    return total;
  }

  return Math.min(paint(0, 0), paint(0, 1), paint(0, 2));
};

var minCost3 = function (costs) {
  let first = 0,
    second = 0,
    third = 0;
  for (let i = 0; i < costs.length - 1; i++) {
    first = Math.min(costs[i][1], costs[i][2]);
    second = Math.min(costs[i][0], costs[i][2]);
    third = Math.min(costs[i][0], costs[i][1]);

    costs[i + 1][0] += first;
    costs[i + 1][1] += second;
    costs[i + 1][2] += third;
  }
  return costs[costs.length - 1].reduce((prev, cur) => Math.min(prev, cur));
};
