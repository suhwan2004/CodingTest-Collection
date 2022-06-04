/*
Start : 6:00 ~
I : 2 binary tree
O : boolean
C : ...
E : x

DS : 
ALGO : 
Time : 
Space :

dfs
1. 리프노드가 존재하는 최 하단까지 쭉 내려간다.
2. 거기서부터 확인하면 됨.

bfs
queue [3]
queue1 [4]
cur = 3 => 4와같진 않음.
queue [4, 5]
cur = 4 => 4와 같음.
queue1과 지금부터 비교연산을 하면 됨.

*/
var isSubtree = function (root, subRoot) {
  let node = root;
  let snode = subRoot;
  let queue = [node];
  let flag = false;
  while (queue.length > 0) {
    let cur = queue.shift();
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);

    if (cur.val === snode.val) {
      flag = dfs(cur, snode);
    }
    if (flag) break;
  }

  return flag;

  function dfs(cur, sub) {
    let lState, rState;
    if (cur.val !== sub.val) return false;
    if ((cur.left && sub.left) || (!cur.left && !sub.left)) {
      if (cur.left) lState = dfs(cur.left, sub.left);
      else lState = true;
    } else lState = false;
    if ((cur.right && sub.right) || (!cur.right && !sub.right)) {
      if (cur.right) rState = dfs(cur.right, sub.right);
      else rState = true;
    } else rState = false;

    if (lState && rState) return true;
    else return false;
  }
};
