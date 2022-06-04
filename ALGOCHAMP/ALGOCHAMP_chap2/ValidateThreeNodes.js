/*
7:34 ~ 8:04 , 8:02

결론적으로는 노드2의 부모가 노드1 또는 노드3이 되야되고, 요 중에 남는게 자식노드로써 존재하냐.

I : bst, nodes...
O : boolean(자식이랑, 부모 노드가 맞는지.)
C : 주어진 노드들은 bst에 포함되어 있고, 다 유효하다.
E : ??

DS : BST
ALGO : bfs
Time : O(N^2) => javascript의 내장 method arr.shift() 특성상 O(N)이 추가로 곱해진다.
Space : O(2N) => O(N)

푸는 법

3N =>

one, two, three 요거를 돌면서 계층을 저장하는 변수에 표시를 해주고.

         1이 부모, 3이 자식        3이 부모, 1이 자식.
if((one < two&& two < three)||(one>two&&two>three)) return true;
else return false;
*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function tmp() {
  const node = new Node(
    5,
    new Node(2, new Node(1, new Node(0)), new Node(4, new Node(3))),
    new Node(7, new Node(6), new Node(8))
  );
  // const node3 = new Node(3);
  // const node0 = new Node(0);
  // const node6 = new Node(6);
  // const node8 = new Node(8);

  // const node1 = new Node(1);
  // const node4 = new Node(4);
  // const node7 = new Node(7);
  // const node7 = new Node(7);
  // const node2 = new Node(2);
  // const root = new Node(5);
  return node;
}

function solution(tree, nodeOne, nodeTwo, nodeThree) {
  //목표 : bfs로 다 돌아서 계층 확인.
  let one, two, three;
  let node = tree;
  let queue = [[node, 1]];
  while (queue.length > 0) {
    let currentNode = queue.shift();
    let val = currentNode[0].val;
    let level = currentNode[1];
    if (currentNode[0].left) queue.push([currentNode[0].left, level + 1]);
    if (currentNode[0].right) queue.push([currentNode[0].right, level + 1]);
    if (val === nodeOne) {
      one = level;
    } else if (val === nodeTwo) {
      two = level;
    } else if (val === nodeThree) {
      three = level;
    }
  }
  return (one < two && two < three) || (one > two && two > three)
    ? true
    : false;
}

console.log(solution(tmp(), 0, 2, 3));
