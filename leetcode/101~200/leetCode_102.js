/*
Input : Binary Tree(root)
Output : int 2d Array(2d Array including each same Level nodes...)
Contraints : 
 - The number of nodes in the tree is in the range [0, 2000].
 - -1000 <= Node.val <= 1000
E : x
*/

/*

Time : O(N^2), 다른 언어로 구현하면 O(N) => js의 shift는 한 자리씩 밈으로써 시간복잡도를 발생시킴.
Space : O(N)
DS : queue, Tree
ALGO : BFS , while
*/
var levelOrder = function (root) {
  if (!root) return []; //two edge case
  if (!root.right && !root.left) return [[root.val]];

  let res = []; // return arr
  let queue = [[root], []]; // to use bfs
  let last = []; //res에 값을 넣어주기 위해 만듬.

  while (queue[0].length > 0 || queue[1].length > 0) {
    //O(N)
    let cur = queue[0].shift(); //O(N)
    last.push(cur.val);

    if (cur.left) queue[1].push(cur.left);
    if (cur.right) queue[1].push(cur.right);

    if (queue[0].length === 0) {
      res.push(last);
      last = [];
      queue.shift();
      queue.push([]);
    }
  }
  return res;
};
