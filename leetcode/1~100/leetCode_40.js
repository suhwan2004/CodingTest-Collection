/*
Input : int Array(candidates), int(target)
Output : int Array(all combination cases)
Contraints : 
 - 1 <= candidates.length <= 100
 - 1 <= candidates[i] <= 50
 - 1 <= target <= 30
 - Each number in candidates may only be used once in the combination
 - The solution set must not contain duplicate combinations.
E : x

Optimal Solution
Time : O(2^N)
Space : O(N), call Stack
ALGO : dfs ,backtracking
DS : Array
*/

var combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((b, a) => b - a);

  const helper = (rem, start, current) => {
    if (rem < 0) return;
    if (rem === 0) {
      result.push(current.slice());
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      current.push(candidates[i]);
      helper(rem - candidates[i], i + 1, current.slice());
      current.pop();
    }
  };

  helper(target, 0, []);

  return result;
};
