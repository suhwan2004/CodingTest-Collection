/*
Input : linked list(head) 
Output : node(return the node where the cycle begins. If there is no cycle, return null.)
Contraints : 
 - The number of the nodes in the list is in the range [0, 104].
 - -105 <= Node.val <= 105
 - pos is -1 or a valid index in the linked-list.
 - Follow up: Can you solve it using O(1) (i.e. constant) memory?
E : x

141번과의 차이점 : 141번의 경우는 입력 링크드 리스트가 cycle linked list인지 물어보는 문제임.
이 문제는 사이클이 발생하는 첫 지점을 발견하고 해당 node를 반환해야됨.
*/

/*
Time : O(N)
Space : O(1)
ALGO : for
DS : linked list
*/

var detectCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      slow = head;
      while (fast != slow) {
        fast = fast.next;
        slow = slow.next;
      }
      return slow;
    }
  }
  return null;
};
