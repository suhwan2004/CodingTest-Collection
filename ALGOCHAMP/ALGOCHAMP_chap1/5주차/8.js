var mergeTwoLists = function (l1, l2) {
  //edge cases...
  if (l1 == null && l2 == null) return l1;
  if (l1 == null && l2 != null) return l2;
  if (l2 == null && l1 != null) return l1;

  let main;
  let sub;
  let nextN;
  let loc;

  if (l1.val > l2.val) {
    loc = "l2";
    main = l2;
    sub = l1;
  } else {
    loc = "l1";
    main = l1;
    sub = l2;
  }

  while (sub != null) {
    if (main.next == null) {
      main.next = sub;
      break;
    }
    if (main.val == sub.val) {
      nextN = main.next;
      main.next = new ListNode(sub.val, nextN);
      main = main.next;
      main.next = nextN;
      sub = sub.next;
    } else if (main.val < sub.val) {
      nextN = main.next;
      if (nextN.val >= sub.val) {
        main.next = new ListNode(sub.val, nextN);
        main = main.next;
        main.next = nextN;
        sub = sub.next;
      } else main = main.next;
    }
  }
  return loc == "l1" ? l1 : l2;
};
