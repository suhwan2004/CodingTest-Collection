/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    };
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

var printLinkedListInReverse = function (head) {
  function recursion(node) {
    if (!node.getNext()) {
      node.printValue();
      return;
    }
    recursion(node.getNext());
    node.printValue();
  }
  recursion(head);
};
