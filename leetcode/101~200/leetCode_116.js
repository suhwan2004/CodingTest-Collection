/*
Input : Binary Tree(root)
Output : root(A tree with the total sum for each level)
Contraints : 
 - The number of nodes in the tree is in the range [0, 2^12 - 1].
 - -1000 <= Node.val <= 1000
 - You may only use constant extra space.
 - The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.
E : x
*/

/*
Time : O(N)
Space : O(1)
ALGO : for
DS : Binary Tree
*/

var connect = function (root) {
  let ptr = root;
  while (root && root.left) {
    let temp = root;
    while (temp) {
      temp.left.next = temp.right;
      temp.right.next = temp.next ? temp.next.left : null;
      temp = temp.next;
    }
    root = root.left;
  }
  return ptr;
};
