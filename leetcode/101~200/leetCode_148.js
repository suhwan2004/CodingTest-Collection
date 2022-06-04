/*
Input : linked list(head)
Output : linked list(sorted head)
Contraints : 
 - The number of nodes in the list is in the range [0, 5 * 10^4].
 - -10^5 <= Node.val <= 10^5
E : x 
*/

/*
using sort
Time : O(NlogN)
Space : O(N)
*/
var sortList = function (head) {
  let arr = [];
  let node = head;

  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  node = head;

  arr
    .sort((a, b) => a - b)
    .map((curVal) => {
      node.val = curVal;
      node = node.next;
    });
  return head;
};
