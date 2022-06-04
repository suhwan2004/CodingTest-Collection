/*
Input : linked list (head), int(n => delete target)
Output : linked list(head deleted target)
Constraints : 
 - The number of nodes in the list is sz.
 - 1 <= sz <= 30
 - 0 <= Node.val <= 100
 - 1 <= n <= sz
 - E : x 


Optimal Solution (don't using space)
Time : O(2N) => O(N)
Space : O(1)
DS : linked list
ALGO : for
*/

var removeNthFromEnd = function (head, n) {
  let node = head;
  let size = 1;
  while (node.next !== null) {
    node = node.next;
    size++;
  }
  if (size === 1 && size === n) return null;
  if (n === size) return head.next;

  node = head;
  let prev;
  while (size !== n) {
    prev = node;
    node = node.next;
    size--;
  }
  prev.next = node.next;
  return head;
};
