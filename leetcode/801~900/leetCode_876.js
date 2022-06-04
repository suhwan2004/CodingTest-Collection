var middleNode = function (head) {
  if (head.next === null) return head;
  let count = 1;
  let node = head;
  while (node.next !== null) {
    node = node.next;
    count++;
  }
  let mid = Math.floor(count / 2);
  count = 1;
  node = head;
  while (node !== null) {
    if (count === mid + 1) return node;
    node = node.next;
    count++;
  }
};
