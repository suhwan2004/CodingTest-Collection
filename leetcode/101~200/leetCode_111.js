/*
11:20 ~ 11:50

I : Tree
O : int, minimum Depth
C : 
The number of nodes in the tree is in the range [0, 105].
-1000 <= Node.val <= 1000
E : !root => return 0

DS : Tree
ALGO : DFS
Time : O(N)
Space : O(N)

푸는 방법...


1.edge case
2.min이라는 변수를 정의함. 현재까지 확인한 가장 작은 depth
3.DFS(node, count)
 (1).자식노드가 아예 없을 때.(min 갱신, return)
 (2) if(왼쪽자식이 있을 때 && min > count) dfs(node.left);
 (3) 오른쪽 자식이 있을 때 위에랑 같이 함.
4.return min
*/

var minDepth = function (root) {
  if (!root) return 0;

  let min = Infinity; //minimum depth!

  function DFS(node, count) {
    if (!node.left && !node.right) {
      min = Math.min(min, count);
      return;
    }

    if (node.left && min > count) DFS(node.left, count + 1);
    if (node.right && min > count) DFS(node.right, count + 1);
  }

  DFS(root, 1);
  return min;
};
