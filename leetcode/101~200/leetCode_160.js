/*
Input : 2 Binary Search(headA, headB)
Output :Binary Search (the node at which the two lists intersect)
Contraints : 
 - The number of nodes of listA is in the m.
 - The number of nodes of listB is in the n.
 - 1 <= m, n <= 3 * 104
 - 1 <= Node.val <= 105
 - 0 <= skipA < m
 - 0 <= skipB < n
 - intersectVal is 0 if listA and listB do not intersect.
 - intersectVal == listA[skipA] == listB[skipB] if listA and listB intersect.
 - Follow up: Could you write a solution that runs in O(m + n) time and use only O(1) memory?
E : x
*/

/*
Optimal Solution

Time : O(M+N)
Space : O(1)
ALGO : for
DS : Binary Search

*/

var getIntersectionNode = function (headA, headB) {
  let h1 = headA;
  let h2 = headB;

  while (h1 !== h2) {
    h1 = h1 === null ? headB : h1.next;
    h2 = h2 === null ? headA : h2.next;
  }
  return h1;
};
