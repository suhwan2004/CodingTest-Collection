/*
Input : int Array(prices)
Output : int(the maximum profit you can achieve)
Contraints : 
 - 1 <= prices.length <= 5000
 - 0 <= prices[i] <= 1000
E : x 
*/

/*
Time : O(N)
Space : O(1)
ALGO : For
DS : Array
*/

var maxProfit = function (prices) {
  var buy = 2147483647; // 2^31 - 1
  var free = 0,
    last = 0,
    now = 0;
  for (let i = 0; i < prices.length; i++) {
    now = Math.max(last, prices[i] - buy);
    buy = Math.min(buy, prices[i] - free);
    free = last;
    last = now;
  }
  return now;
};
