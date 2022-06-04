/*
Input : int(k), int(n)
Output : int 2d Array(a list of all possible valid combinations. )
Contraints : 
 - 2 <= k <= 9
 - 1 <= n <= 60
E : x 
*/

/*
Optimal Solution
Time : O(9!-K  /  (9-K)! ) => leetCode time Complexity... but i don understand it
Space : O(K)
ALGO : dfs, backtracking
DS : Array
*/

var combinationSum3 = function (k, n) {
  let res = [];
  dfs(0, [], 1);
  return res;

  function dfs(cur, arr, pos) {
    if (arr.length === k || pos === 10) {
      if (cur === n && arr.length === k) res.push(arr.slice());
      return;
    }
    for (let i = pos; i < 10; i++) {
      if (arr.length + 1 <= n - cur && cur + i <= n) {
        arr.push(i);
        dfs(cur + i, arr, i + 1);
        arr.pop();
      }
    }
  }
};
