/*
Input : int Array(candidates), int(target)
Output : int 2d Array(all combination cases)
Contraints : 
 - 1 <= candidates.length <= 30
 - 1 <= candidates[i] <= 200
 - All elements of candidates are distinct.
 - 1 <= target <= 500
E : x

Optimal Solution
Time : O(N^(T/M + 1)) , T === target value, M == the Minimum value among the candidates
Space : O(T/M)
ALGO : dfs, backTracking
DS : Array
*/

var combinationSum = function (arr, target) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    dfs(arr[i], i, [arr[i]]);
  }
  return res;

  function dfs(sum, loc, sumArr) {
    if (sum === target) {
      res.push(sumArr);
      return;
    }
    for (let i = loc; i < arr.length; i++) {
      if (sum + arr[i] <= target) dfs(sum + arr[i], i, [...sumArr, arr[i]]);
    }
  }
};
