var sequenceReconstruction = function (nums, sequences) {
  let map = new Map();
  let visited = new Set();
  for (let i of nums) {
    map.set(i, new Set());
  }

  for (let seq of sequences) {
    for (let i = 0; i < seq.length - 1; ++i) {
      const curr = seq[i];
      const next = seq[i + 1];
      map.get(curr).add(next);
    }
  }

  let result = false;
  let endPoint = nums[nums.length - 1];
  dfs(nums[0], []);
  return result;

  function dfs(cur, path) {
    path.push(cur);

    if (cur === endPoint) {
      if (!result) result = nums.length === path.length;
      return;
    }

    let neighbors = map.get(cur);
    for (let n of neighbors) {
      dfs(n, path);
      path.pop();
    }
  }
};
