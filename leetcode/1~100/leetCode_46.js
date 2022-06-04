/*
Input : int Array(nums)
Output : int 2d Array(all possible permutations)
Contraints : 
 - 1 <= nums.length <= 6
 - -10 <= nums[i] <= 10
 - All the integers of nums are unique.
E : x

Optimal Solution
Time : O(N * backtracking)
Space : O(backtracking)
ALGO : for, dfs, backtracking
DS : Array
*/

var permute = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let arr = nums.slice();
    arr.splice(i, 1);
    dfs([nums[i]], arr);
  }
  return res;
  function dfs(cur, arr) {
    if (cur.length === nums.length) {
      res.push(cur);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      let narr = arr.slice();
      let n = narr[i];
      narr.splice(i, 1);
      dfs([...cur, n], narr);
    }
  }
};
