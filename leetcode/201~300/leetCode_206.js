/*
Input : linked list(head)
Output : linked list(reverse head)
Contraints :
 - The number of nodes in the list is the range [0, 5000].
 - -5000 <= Node.val <= 5000
E : x
*/

/*
Optimal Solution
Time : O(N)
Space : O(1)
ALGO : for
DS : linked list, Array
*/
var reverseList = function (head) {
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};
