/*
Input : int Array(nums)
Output : int 2d Array(not duplicated and all possible subsets)
Contraints :
 - 1 <= nums.length <= 10
 - -10 <= nums[i] <= 10 
E : x
*/

/*
Solution
Time : O(NlogN + n*2^N)
Space : O(N)
ALGO : Sort, dfs, Backtracking
DS : Array
*/

var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const rec = (start, comb) => {
    result.push([...comb]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      comb = [...comb, nums[i]];
      rec(i + 1, comb);
      comb = comb.slice(0, -1);
    }
  };
  rec(0, []);
  return result;
};
