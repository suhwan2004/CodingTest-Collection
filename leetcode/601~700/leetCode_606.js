/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */

/*
start : 2022.09.07 21:31 ~ 21:46
Input : Binary Tree
Output : string of Binary Tree Preorder traversal
Contraints : 
 - The number of nodes in the tree is in the range [1, 104].
 - -1000 <= Node.val <= 1000
Edge case : if(!root.left && !root.right) return `${root.val}`;
 - 
 
my solution
Time : O(N)
Space : O(N);
ALGO : Recursion
DS : string

*/
var tree2str = function (root, degree = 1) {
  let str = "",
    lstr = "",
    rstr = "";
  if (degree !== 1) str += "(";
  str += `${root.val}`;

  if (root.left) lstr += tree2str(root.left, degree + 1) + ")";
  if (root.right) rstr += tree2str(root.right, degree + 1) + ")";

  if (rstr !== "" && lstr === "") lstr = "()";
  return str + lstr + rstr;
};
