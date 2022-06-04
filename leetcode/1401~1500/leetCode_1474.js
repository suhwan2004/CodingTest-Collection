var deleteNodes = function (head, m, n) {
  let storeNode;
  let node = head;
  let mCount = m,
    nCount = n;

  while (node) {
    if (mCount !== 0) {
      if (mCount === 1) storeNode = node;
      node = node.next;
      mCount--;
    } else if (nCount !== 0) {
      nCount--;
      node = node.next;
    } else if (nCount === 0 && mCount === 0) {
      (mCount = m), (nCount = n);
      storeNode.next = node;
    }
  }
  if (mCount === 0) storeNode.next = null;
  return head;
};
