/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.arr = [];
  while (head) {
    this.arr.push(head.val);
    head = head.next;
  }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};
