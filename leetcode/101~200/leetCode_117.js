/*
Input : Binary Tree(root)
Output : Binary Tree(A tree with the total sum for each level)
Contraints : 
 - The number of nodes in the tree is in the range [0, 6000].
 - -100 <= Node.val <= 100
 - You may only use constant extra space.
 - The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.
E : if (!root) return root;
*/

var connect = function (root) {
  if (!root) return root;
  let node = root;
  let queue = [[node, 0]];
  while (queue.length > 0) {
    let cur = queue.shift();
    let [curNode, curLevel] = cur;
    if (queue.length === 0 || queue[0][1] !== curLevel) curNode.next = null;
    else if (queue.length > 0 && queue[0][1] === curLevel) {
      curNode.next = queue[0][0];
    }
    if (cur[0].left) queue.push([cur[0].left, cur[1] + 1]);
    if (cur[0].right) queue.push([cur[0].right, cur[1] + 1]);
  }
  return root;
};
