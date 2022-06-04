/*
DS : Tree
ALGO : DFS(top down)
Time : O(N) => N === Number of Tree Nodes
Space : O(N) => Call Stack? (prev...) => prev가 매개변수인건 다르나 각 dfs속에서의 prev의 값은 재각기 다릅니다.

생각한 솔루션 : 
이 문제의 경우에는 탑 다운으로 풀 때 편의성이 느껴져서 탑다운으로 풀었습니다!

1. 일단, 자식노드가 있으면 이동함.
2. 기존의 노드들을 본 것중에 가장 컸던 prev값과 비교해서 크거나 같으면 res++
3. return res
*/
var goodNodes = function (root) {
  let res = 0;
  dfs(root, -Infinity);
  return res;

  function dfs(node, prev) {
    if (node.val >= prev) res++;
    prev = Math.max(node.val, prev);
    if (node.left) dfs(node.left, prev);
    if (node.right) dfs(node.right, prev);
  }
};
