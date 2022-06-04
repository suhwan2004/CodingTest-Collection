/*
Input : int Array(prices)
Output : int( the maximum profit you can achieve from this transaction )
Contraints : 
 - 1 <= prices.length <= 105
 - 0 <= prices[i] <= 104
E : if (prices.length === 1) return 0;
*/

/*
start : 21:11 ~ 21:15

Time : O(N)
Space : O(1)
ALGO : for
DS : Array
*/
var maxProfit = function (prices) {
  if (prices.length === 1) return 0;
  let maxProfit = 0;
  let minPrice = Infinity;
  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) minPrice = prices[i];
    else maxProfit = Math.max(prices[i] - minPrice, maxProfit);
  }

  return maxProfit;
};
