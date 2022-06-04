/*

시간: O(n)
공간 : O(n)

tree     =       1
               /   \
             -6     3                           
             / \   / \
            4   5 -1  6                   
                     / \                 
                    -10 -2                         

            
                
    
  
                    1
                 2     3
              4   5   6  7  

              


*/

class Node {
  constructor(value, lNode, rNode) {
    this.value = value;
    this.left = lNode;
    this.right = rNode;
  }
}
class Tree {
  constructor(value, lNode, rNode) {
    this.root = new Node(value, lNode, rNode);
  }
}

//let node8 = new Node(8, null, null);
let node7 = new Node(7, null, null);
let node6 = new Node(6, null, null);
let node5 = new Node(5, null, null);
let node4 = new Node(4, null, null);
let node3 = new Node(3, node6, node7);
let node2 = new Node(2, node4, node5);
let tree = new Tree(1, node2, node3);

const solution = (curNode) => {
  if (!curNode) return [0, -Infinity];

  let [leftMaxSumBranch, leftMaxPathSum] = solution(curNode.left);
  let [rightMaxSumBranch, rightMaxPathSum] = solution(curNode.right);

  let maxSumBranch = Math.max(leftMaxSumBranch, rightMaxSumBranch);

  maxSumBranch = Math.max(maxSumBranch + curNode.value, curNode.value);

  const maxPathSum = Math.max(
    leftMaxSumBranch + curNode.value + rightMaxSumBranch,
    leftMaxPathSum,
    rightMaxPathSum
  );
  console.log([maxSumBranch, maxPathSum]);
  return [maxSumBranch, maxPathSum];
};

const [maxSumBranch, maxPathSum] = solution(tree.root);
console.log(maxPathSum);
