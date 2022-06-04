/*
8:03 ~ 8:33
Input : Binary Search Tree(root), val은 0부터 1000까지, 노드의 갯수는 1 ~ 100
Output : Binary Search Tree(제가 수정한)
C : 
The number of nodes in the given tree will be in the range [1, 100].
0 <= Node.val <= 1000
E : if(!root.left && !root.right) return root;
---------------------


//앞에서 브루트 포스 솔루션을 써도 좋음. 처음에는 쓰는게 좋긴 하다!

// 나름 옵티멀 솔루션
DS: Tree, Array
ALGO : for
Time : O(N) => N은 root tree의 node들의 수.
Space : O(N)


생각나는 방법.
1. Edge case 검사하기.
2. 배열을 정의함. => 이거는 값을 넣는 역활
3. 중위 순회 하면서 값 넣어줌.
4. 완성된 배열로 새로운 이진탐색트리를 만들어줌.
5. 요거 반환하면 끝!
*/
var increasingBST = function (root) {
  if (!root.left && !root.right) return root; // edge case
  let arr = [];
  let node = root;
  inorder(root);
  let res = new TreeNode(-1, null, new TreeNode()); // 더미노드
  let a = res; // 원래자리 기억하기.
  res = res.right; // 한칸 옮기면서 여기서부터가 진짜시작.
  for (let i = 0; i < arr.length; i++) {
    // 새로운 트리 구현.
    res.val = arr[i];
    if (i === arr.length - 1) break;
    res.left = null;
    res.right = new TreeNode();
    res = res.right;
  }
  return a.right;

  function inorder(node) {
    // inorder 구현.
    if (!node) return;
    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  }
};
