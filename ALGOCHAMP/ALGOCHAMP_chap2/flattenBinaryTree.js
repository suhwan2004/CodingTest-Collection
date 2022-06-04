/*
left, mid, right

flatten binary tree라는 것이 있음.
이건 double Linked List 형식으로 left(prev), right(next)로 되어 있음.
결론적으로는 left, mid, right형식으로 채워넣으면 됨.
*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function makeTree() {
  let Tree = new Node(
    1,
    new Node(2, new Node(4), new Node(5, new Node(7), new Node(8))),
    new Node(3, new Node(6))
  );
  return Tree;
}

/*
브루트 포스 솔루션
time : O(N)
Space : O(N)
*/
function brutheforce(root) {
  let node = root;
  let dummy = new Node(-1);
  let current = dummy;

  dfs(node);
  dummy = dummy.right;
  dummy.left = null;
  return dummy;

  function dfs(node) {
    if (!node.left && !node.right) {
      //left or right leaf node 삽입.
      current.right = new Node(node.val, current);
      current = current.right;
      return;
    }
    if (node.left) {
      dfs(node.left);
    }
    current.right = new Node(node.val, current);
    current = current.right;
    if (node.right) {
      dfs(node.right);
    }
  }
}

//console.log(brutheforce(makeTree()));

/*
Time : O(N)
Space : O(depth) (만약, 온전한 binary tree일 경우 O(logn))

오늘 모모형이 설명해준 방법.
bottom-up 방식으로 풀었음.

4, 2, 7, 5, 8, 1, 6, 3 이게 답인데 이걸 보면 규칙이 있음.
1의 경우 왼쪽은 left방향의 가장 깊은 rightNode, 오른쪽은 right방향의 가장 깊은 leftNode임.
이걸 이용하여 푸는 방법.

[null,4],2,[7-5-8,null]
[null,4-2-7-5-8] 1 [6-3, null]

[null,6] 3 [null,null]
[6-3,null]
*/
function optimal(root) {
  let node = root;
  reculsion(root);

  return root;
  function reculsion(curNode) {}
}

console.log(optimal(makeTree()));

/*
    console.log(curNode.val + "로왔군");

    let leftmost, rightmost;
    if (curNode.left) {
      let [leftNodeleft, leftNoderight] = reculsion(curNode.left);
      leftmost = leftNoderight;
    } else {
      leftmost = null;
    }
    //console.log(leftmost, curNode);
    leftmost = linkChange(leftmost, curNode);
    console.log("leftmost : ", leftmost);
    //console.log("left : ", leftmost);
    if (curNode.right) {
      let [rightNodeleft, rightNoderight] = reculsion(curNode.right, "r");
      //console.log(curNode.val, rightNodeleft, rightNoderight);
      rightmost = rightNodeleft;
    } else {
      rightmost = null;
    }

    rightmost = linkChange(curNode, rightmost);
    return [leftmost, rightmost];
  }
  function linkChange(first, second) {
    //console.log(first.val, second.val);
    console.log("first와 second", first, second);
    if (first) first.right = second;
    return second;
  }
*/
