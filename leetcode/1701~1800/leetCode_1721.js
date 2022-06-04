var swapNodes = function (head, k) {
  let len = 1;
  let node = head;
  let leftN;
  let lcount = 1;

  while (node) {
    if (lcount === k) leftN = node;
    len++, lcount++;
    node = node.next;
  }
  len--;

  let focusP = len - k + 1;
  let rightN = head;
  let rcount = 1;

  while (rcount !== focusP) {
    rcount++;
    rightN = rightN.next;
  }

  [rightN.val, leftN.val] = [leftN.val, rightN.val];
  return head;
};
