/*
Input : binary tree(root)
Output : int Array(루트부터 끝까지 맨 오른쪽의 노드 값들을 받은 정수형 배열)
Contraints : 
 - The number of nodes in the tree is in the range [0, 100].
 - -100 <= Node.val <= 100
E : x 
*/

/*
Time : O(N^2) => js의 경우 shift로 인해 시간복잡도 증가.
Space : O(N)
ALGO : BFS
DS : Array
*/

var rightSideView = function (root) {
  if (!root) return [];
  let queue = [[root, 1]];
  let res = [];

  while (queue.length > 0) {
    let val = queue.shift();
    if (val[0].left) queue.push([val[0].left, val[1] + 1]);
    if (val[0].right) queue.push([val[0].right, val[1] + 1]);
    if (queue.length === 0 || val[1] !== queue[0][1]) res.push(val[0].val);
  }

  return res;
};
