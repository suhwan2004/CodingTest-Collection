/*
Input : int Array(costs)
Output : int(Return the minimum cost to paint all houses)
Contraints : 
 - costs.length == n
 - costs[i].length == k
 - 1 <= n <= 100
 - 2 <= k <= 20
 - 1 <= costs[i][j] <= 20
E :  x
*/

/*
Time : O(N^2)
Space : O(1)
ALGO : for, DP
DS : Array
*/

var minCostII = function (costs) {
  for (let i = 0; i < costs.length - 1; i++) {
    let minF = [Infinity, -1];
    let minS = [Infinity, -1];

    for (let j = 0; j < costs[0].length; j++) {
      let prevMin = [minF[0], minF[1]];

      if (minF[0] > costs[i][j]) {
        minF[0] = costs[i][j];
        minF[1] = j;
        if (minS[0] > prevMin[0]) {
          minS[0] = prevMin[0];
          minS[1] = prevMin[1];
        }
      }
      if (minF[1] === j) continue;
      if (minS[0] > costs[i][j]) {
        minS[0] = costs[i][j];
        minS[1] = j;
      }
    }
    for (let j = 0; j < costs[0].length; j++) {
      costs[i + 1][j] += j === minF[1] ? minS[0] : minF[0];
    }
  }
  return costs[costs.length - 1].reduce((prev, cur) => Math.min(prev, cur));
};
