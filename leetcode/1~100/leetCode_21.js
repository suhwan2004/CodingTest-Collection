/*
Input : 2 linked list(list1, list2)
Output : linked list(list1, list2 merging...)
Constraints : 
 - The number of nodes in both lists is in the range [0, 50].
 - -100 <= Node.val <= 100
 - Both list1 and list2 are sorted in non-decreasing order.
E : x


Bruth force => if you create node awalys...
Time : O(N)
Space : O(N)


Optimal Solution
Time : O(N)
Space : O(1)
DS : Linked List
ALGO : for
*/
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return list1;
  if (!list1 || !list2) return !list1 ? list2 : list1;

  let dummy = new ListNode(-101);
  let head = dummy;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      dummy.next = list2;
      list2 = list2.next;
    } else {
      dummy.next = list1;
      list1 = list1.next;
    }
    dummy = dummy.next;
  }
  dummy.next = !list1 ? list2 : list1;

  return head.next;
};
