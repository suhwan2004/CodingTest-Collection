/*
Input : int Array(prices)
Output : int( the maximum profit you can achieve from this transaction )
Contraints : 
 - 1 <= prices.length <= 3 * 10^4
 - 0 <= prices[i] <= 10^4
E : if (prices.length === 1) return 0;

121번과의 차이점 : 121번은 한번의 거래로 최대 이득이 나는 경우를 구한다면 122는 여러 번 거래가 가능하다고 가정함.
*/

/*
Optimal Solution

Time : O(N)
Space : O(1)
ALGO : for
DS : Array
*/

var maxProfit = function (prices) {
  if (prices.length === 1) return 0;

  let sum = 0;
  let cur_price = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (cur_price < prices[i]) {
      sum += prices[i] - cur_price;
      cur_price = prices[i];
    } else cur_price = prices[i];
  }
  return sum;
};
