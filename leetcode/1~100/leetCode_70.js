/*
Input : int(n === top)
Output : int(distinct ways can climb to the top)
Contraints : 1 <= n <= 45
E : if (n === 1 || n === 2) return n;
*/

/*
Optimal Solution
Time : O(N)
Space : O(1)
ALGO : DP, for
DS : x
*/
var climbStairs = function (n) {
  if (n === 1 || n === 2) return n;

  let val = 1;
  let val1 = 2;
  for (let i = 3; i <= n; i++) {
    let temp = val + val1;
    val = val1;
    val1 = temp;
  }
  return val1;
};
