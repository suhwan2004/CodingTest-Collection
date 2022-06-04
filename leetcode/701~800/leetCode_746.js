var minCostClimbingStairs = function (cost) {
  let val = cost[0];
  let val1 = cost[1];
  for (let i = 2; i < cost.length; i++) {
    let min = Math.min(val, val1) + cost[i];
    val = val1;
    val1 = min;
  }
  return val1 > val ? val : val1;
};
