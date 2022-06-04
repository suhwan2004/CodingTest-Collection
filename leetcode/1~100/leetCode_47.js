/*
Input : int Array(nums)
Output : int 2d Array(all possible unique permutations...)
Contraints : 
 - 1 <= nums.length <= 8
 - -10 <= nums[i] <= 10
E :  if (nums.length === 1) return [[nums[0]]];
*/

/*
Time : O(2N + N*backtracking) => O(N*backtracking)
Space : O(backtracking)
ALGO : for, dfs, backtracking
DS : Array, hashSet
*/
var permuteUnique = function (nums) {
  if (nums.length === 1) return [[nums[0]]];

  let arr = new Array(21).fill(0);
  let set = new Set();
  let visited = new Set();
  let resCount = 0;
  let check = 10;

  for (let i of nums) {
    resCount++;
    set.add(i);
    arr[i + check]++;
  }

  for (let i of set) {
    arr[i + check]--;
    dfs(`${i}`, 1);
    arr[i + check]++;
  }

  let res = [];
  for (let i of visited) {
    let wordArr = i.split(",");
    res.push(wordArr);
  }
  return res;

  function dfs(cur, count) {
    if (count === resCount) {
      visited.add(cur);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        arr[i]--;
        dfs(cur + `,${i - check}`, count + 1);
        arr[i]++;
      }
    }
  }
};
