/*
Time : O(3N) => O(N)
Space : O(3N) => O(N);
*/
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }

  let arr = [];

  for (let [k, v] of map) {
    if (arr[v] === undefined) {
      arr[v] = [k];
    } else {
      arr[v].push(k);
    }
  }

  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === undefined) continue;
    res.push(...arr[i]);
  }
  return res.slice(0, k);
};
