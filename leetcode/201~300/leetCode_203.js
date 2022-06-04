/*
Input : linked list(head), int(val)
Output : linked list(head deleting val in head)
Contraints : 
 - The number of nodes in the list is in the range [0, 104].
 - 1 <= Node.val <= 50
 - 0 <= val <= 50
E : 
*/

/*
Optimal Solution
 => linked list 순회 및 수정 문제에서 optimal의 기준은 O(N)의 시간복잡도도 있지만, 공간을 쓰지 않는 것이다.
Time : O(N)
Space : O(1)
ALGO : for
DS : linked list
*/

var removeElements = function (head, val) {
  if (!head) return head; // edge case : not node...
  let firstNode = new ListNode(-1, head);
  let node = firstNode;
  while (node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
    } else node = node.next;
  }

  return firstNode.next;
};
