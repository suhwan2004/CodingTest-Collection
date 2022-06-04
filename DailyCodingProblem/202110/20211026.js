/*
The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

You may also use a list or array to represent a set.
*/
/*
[1,2,3] 이렇게 주어지면 이걸로 만들 수 있는 모든 케이스를 반환해주면 된다.
*/

var subsets = function (nums) {
  let arr = [[]];

  for (let i = 0; i < nums.length; i++) {
    dfs([nums[i]], i);
  }
  return arr;

  function dfs(cur, index) {
    arr.push(cur);
    for (let i = index + 1; i < nums.length; i++) {
      dfs([...cur, nums[i]], i);
    }
  }
};
