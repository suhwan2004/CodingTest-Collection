/*
Input : listNode(root)
Output : int 2d Array(the vertical order traversal of its nodes' values)
Contraints : 
 - The number of nodes in the tree is in the range [0, 100].
 - -100 <= Node.val <= 100
E : if (!root) return [];
*/

/*
Time : O(N^2)
Space : O(N)
ALGO : BFS
DS : Array, hashMap
*/

var verticalOrder = function (root) {
  if (!root) return [];
  let queue = [];
  let node = root;
  let min = Infinity;
  let map = new Map();
  let res = [];
  //0은 노드, 1은 현재 위치
  queue.push([root, 0]);

  while (queue.length > 0) {
    let [node, loc] = queue.shift();
    min = Math.min(min, loc);
    map.has(loc) ? map.get(loc).push(node.val) : map.set(loc, [node.val]);

    if (node.left) queue.push([node.left, loc - 1]);
    if (node.right) queue.push([node.right, loc + 1]);
  }

  for (let [k, v] of map) {
    res[k + (min < 0 ? Math.abs(min) : min)] = v;
  }
  return res;
};
