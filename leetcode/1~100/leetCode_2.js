//https://leetcode.com/problems/add-two-numbers/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/*
Start : 14:10 ~ 14:52

Input : 2 linked list (node : int)
Space : 1 linked list ( sum of input linked list) (node : int)
Contraints
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
edge case : x

create Array and 3 loop
1. 두 개의 linked list 돌면서 array에 값을 넣는다.
2. 합 연산을 한다.
3. 그 array로 linked list를 만든다.

Time : O(3N), N === node.size of longest input linked list
Space : O(N), => make new linked list : root
DS : linked list, Array
ALGO : for
*/
var addTwoNumbers = function (l1, l2) {
  let node1 = l1,
    node2 = l2;
  let root = new ListNode(-1);
  let node = root;
  let val1 = 0,
    val2 = 0;
  let sumArr = [];

  while (node1 || node2) {
    (val1 = 0), (val2 = 0);
    let flag = false;
    if (node1) [val1, node1, flag] = sumNodeVal(node1);
    if (node2) [val2, node2, flag] = sumNodeVal(node2);
    if (flag) sumArr.push(val1 + val2);
  }

  let idx = 0;
  while (idx < sumArr.length) {
    if (sumArr[idx] > 9) {
      let val = Math.floor(sumArr[idx] / 10);
      sumArr[idx] %= 10;
      if (idx === sumArr.length - 1) sumArr.push(val);
      else sumArr[idx + 1] += val;
    }
    idx++;
  }

  idx = 0;
  while (idx < sumArr.length) {
    node.next = new ListNode(sumArr[idx++]);
    node = node.next;
  }

  return root.next;

  function sumNodeVal(curNode) {
    return [curNode.val, curNode.next, true];
  }
};

/*
Optimal Solution - 2 loop & O(1) space solution!

Time : O(2N)
Space : O(1)
DS : Linked List
ALGO : for

=> if you want to make one loop solution, you maybe use space... 
*/

var addTwoNumbers = function (l1, l2) {
  let longest = -1,
    shortest = -1;
  let root;
  let node1 = l1,
    node2 = l2;
  while (node1 && node2) {
    node1 = node1.next;
    node2 = node2.next;
  }

  longest = node1 ? 1 : 2;
  (node1 = l1), (node2 = l2);

  if (longest === 1) {
    longest = node1;
    shortest = node2;
    root = node1;
  } else {
    longest = node2;
    shortest = node1;
    root = node2;
  }
  while (longest) {
    let sum = longest.val + (shortest ? shortest.val : 0);
    if (sum > 9) {
      let degree = Math.floor(sum / 10);
      let curVal = sum % 10;
      longest.val = curVal;
      if (!longest.next) longest.next = new ListNode(degree);
      else longest.next.val += degree;
    } else longest.val = sum;

    longest = longest.next;
    shortest = shortest ? shortest.next : null;
  }
  return root;
};
