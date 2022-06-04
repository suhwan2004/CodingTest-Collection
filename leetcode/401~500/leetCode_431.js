class Codec {
  constructor() {}

  /**
   * @param {Node} root
   * @return {TreeNode}
   */
  // Encodes an n-ary tree to a binary tree.
  encode = function (root) {
    if (!root) return root;
    let br = new TreeNode(root.val);
    let queue = [];
    queue.push([root, br, 1]);
    //next Level = > left,   same level shifting => right
    while (queue.length > 0) {
      let [baseNode, curNode, dep] = queue.shift();
      let child = baseNode.children;
      if (child.length === 0) {
        continue;
      }
      for (let i = 0; i < child.length; i++) {
        if (i === 0) {
          curNode.left = new TreeNode(child[i].val);
          curNode = curNode.left;
          queue.push([child[i], curNode, dep + 1]);
        } else {
          curNode.right = new TreeNode(child[i].val);
          curNode = curNode.right;
          queue.push([child[i], curNode, dep + 1]);
        }
      }
    }
    return br;
  };

  /**
   * @param {TreeNode} root
   * @return {Node}
   */
  // Decodes your binary tree to an n-ary tree.
  decode = function (root) {
    if (!root) return root;
    let queue = [];
    let br = new Node(root.val, []);
    queue.push([root, br, "first"]);
    while (queue.length > 0) {
      let [baseNode, curNode, prevNode] = queue.shift();
      if (baseNode.right) {
        let newNode = new Node(baseNode.right.val, []);
        prevNode.children.push(newNode);
        queue.push([baseNode.right, newNode, prevNode]);
      }
      if (baseNode.left) {
        let newNode = new Node(baseNode.left.val, []);
        curNode.children.push(newNode);
        queue.push([baseNode.left, newNode, curNode]);
      }
    }
    return br;
  };
}
