/*
Input : int Array(nums) 
Output : int 2d Array(all possible subSets)
Contraints : 
 - 1 <= nums.length <= 10
 - -10 <= nums[i] <= 10
 - All the numbers of nums are unique.
E : x


Optimal Solution
Time : O(N*2^N)
Space : O(N*2^N)
ALGO : DFS, Backtracking, for
DS : Array
*/

var subsets = function (nums) {
  let arr = [[]];

  for (let i = 0; i < nums.length; i++) {
    dfs([nums[i]], i);
  }

  return arr;

  function dfs(cur, loc) {
    arr.push(cur);
    for (let i = loc + 1; i < nums.length; i++) {
      dfs([...cur, nums[i]], i);
    }
  }
};
