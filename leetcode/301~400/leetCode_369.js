var plusOne = function (head) {
  let arr = [];
  let node = head;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  let flag = true;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (flag) {
      let val = arr[i] + 1;
      if (val <= 9) flag = false;
      else val -= 10;
      arr[i] = val;
    } else break;
  }

  if (flag) arr.unshift(1);

  node = head;
  let prev;
  let i = 0;

  while (node || arr.length - 1 >= i) {
    if (!node && arr.length - 1 >= i) {
      prev.next = new ListNode(arr[i]);
      return head;
    }
    node.val = arr[i++];
    prev = node;
    node = node.next;
  }

  return head;
};
