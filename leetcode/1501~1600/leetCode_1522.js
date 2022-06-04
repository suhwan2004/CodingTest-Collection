var diameter = function (root) {
  if (root.children.length === 0) return 0;
  let max = -Infinity;
  dfs(root);
  return max;

  function dfs(node) {
    if (node.children.length === 0) return 1;
    let curMax = 0;
    let curSec = 0;
    for (let i = 0; i < node.children.length; i++) {
      let val = dfs(node.children[i]);
      if (curMax < val) {
        curSec = curMax;
        curMax = val;
      } else if (curSec < val) {
        curSec = val;
      }
    }
    max = Math.max(curMax + curSec, max);
    return curMax + 1;
  }
};
