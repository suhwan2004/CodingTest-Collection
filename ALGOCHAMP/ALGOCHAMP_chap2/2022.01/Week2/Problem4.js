/*


Start : 2:43 ~ 3:13
Find the path with the maximum sum in a given binary tree. Write a function that returns the maximum sum.

A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root. The path must contain at least one node.

I : binary tree
O : Maximum Path(Int) 
C : 적어도 한 개 이상의 노드가 존재한다고 가정한다.
E : if(!root.left && !root.right) return root.val;

DS : Binary Tree
ALGO : DFS
Time : O(N) , N = 전체 노드의 갯수 
Space : O(N), N = 전체 노드의 갯수


-----------------
푸는 법

이 문제의 경우 어떤 노드를 임시 루트로 삼고, 왼쪽 한줄, 오른쪽 한 줄로 해서 최대 paximum Path를 구하는 것이 목적이다.
그렇기, 때문에 이런 경우에는 Bottom up 방식으로 DFS를 돌면 아마도 쉽게 풀수 있을 것이다...?

아래로 먼저 쭉 내려감.
 1. !node.left && !node.right 라면 return node.val. 
 2. 하나씩 반환할 때마다 비교하여 더 큰 값을 반환시켜 준다. 할 때마다, 전역변수 내에 들어있는 let max값을 갱신해준다.
 3. 이거 반복.

 아래는 코드이다.

 -----------------------

 
 leetcode 124. binary Tree Maximum Path Sum (Hard) 문제와 같습니다.
 이 코드로 돌려보니까 13% 정도가 나오네용...

*/

class Node {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function Solution(root) {
  if (!root.left && !root.right) return root.val;

  let max = -Infinity;
  let node = root;
  max = Math.max(dfs(node), max);
  return max;

  function dfs(node) {
    if (!node.left && !node.right) {
      max = Math.max(node.val, max);
      return node.val;
    }

    let lVal = -Infinity,
      rVal = -Infinity;

    if (node.left) lVal = dfs(node.left);
    if (node.right) rVal = dfs(node.right);

    //현재 Path와 max를 비교하여 max값 갱신.
    max = Math.max(
      max,
      node.val,
      node.val + lVal,
      node.val + rVal,
      node.val + lVal + rVal
    );

    //가장 큰 선을 만들어 넘겨줌.
    return Math.max(node.val, node.val + lVal, node.val + rVal);
  }
}

console.log(
  Solution(
    new Node(1, new Node(2, new Node(4)), new Node(3, new Node(5), new Node(6)))
  )
);
