/*
Input : linked list(head)
Output : boolean(Return true if there is a cycle in the linked list)
Contraints : 
 - The number of the nodes in the list is in the range [0, 104].
 - -105 <= Node.val <= 105
 - pos is -1 or a valid index in the linked-list.
 - Follow up: Can you solve it using O(1) (i.e. constant) memory?
E : 
*/

/*
Time : O(N)
Space : O(1)
ALGO : for
DS : linked list
*/

var hasCycle = function (head) {
  let n1 = head;
  let n2 = head;

  while (n2 && n2.next && n2.next.next) {
    n1 = n1.next;
    n2 = n2.next.next;
    if (n1 == n2) return true;
  }
  return false;
};
