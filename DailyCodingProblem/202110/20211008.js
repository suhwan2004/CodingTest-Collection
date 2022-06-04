/*
A builder is looking to build a row of N houses that can be of K different colors.
He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color,
 return the minimum cost which achieves this goal.
*/

/*
한 건축업자가 K개의 서로 다른 색상이 될 수 있는 N개의 주택을 한 줄로 지을 방법을 찾고 있습니다.
 그는 비용을 최소화하는 동시에 이웃하는 두 집이 같은 색을 띠지 않도록 하는 것이 목표입니다.
  n번째 행과 k번째 열이 k번째 색상으로 n번째 집을 짓는 데 드는 비용을 나타내는 N x K 행렬이 주어지면
   이 목표를 달성하는 최소 비용을 반환합니다.


 */

let arr = [
  [3, 1, 2],
  [4, 5, 6],
  [7, 9, 8],
]; // 1,2,3이 각각 색상별 cost, 한 줄 한 줄이 각 집임.

const minCostHouseColorBest = function (costs) {
  if (costs.length === 0) return 0;

  const n = costs.length;
  const k = costs[0].length;

  let min1 = 0;
  let min2 = 0;
  let idx1 = -1;

  for (let i = 0; i < n; i++) {
    let m1 = Infinity;
    let m2 = Infinity;
    let idx2 = -1;

    for (let j = 0; j < k; j++) {
      let cost = costs[i][j];
      cost += j === idx1 ? min2 : min1;

      if (cost < m1) {
        m2 = m1;
        m1 = cost;
        idx2 = j;
      } else if (cost < m2) {
        m2 = cost;
      }
    }

    min1 = m1;
    min2 = m2;
    idx1 = idx2;
  }

  return min1;
};

console.log(minCostHouseColorBest(arr));
