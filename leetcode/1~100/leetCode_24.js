/*
Input : linked list(head)
Output : linked list(Swap Nodes in Pairs...)
Contraints : 
 - The number of nodes in the list is in the range [0, 100].
 - 0 <= Node.val <= 100
E : if (!head || !head.next) return head;
*/

/*
Bruth Force Solution (createing new node always)
Time : O(N)
Space : O(N)
ALGO : for
DS : linked list
*/

var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let arr = [];
  let dummyNode = new ListNode(-1, null);
  let node = dummyNode;
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      node.next = new ListNode(arr[i], new ListNode(arr[i - 1]));
      node = node.next.next;
    } else if (i === arr.length - 1) {
      node.next = new ListNode(arr[i]);
    }
  }
  return dummyNode.next;
};

/*
Optimal Solution
Time : O(N)
Space : O(1)
ALGO : for
DS : linked list
*/

var swapPairsOptimal = function (head) {
  if (!head || !head.next) return head;
  let dummy = new ListNode(-1, null);
  let node = head;
  let prev = null;
  let changeNode = null;
  let count = 0;
  let flag = true;

  while (node) {
    if (count === 0) {
      prev = node;
      count++;
    } else {
      prev.next = node.next;
      node.next = prev;
      if (changeNode) changeNode.next = node;
      count = 0;
      if (flag) {
        dummy.next = node;
        flag = false;
      }
      node = node.next;
      changeNode = node;
    }
    node = node.next;
  }
  return dummy.next;
};
