/*
규칙
*/

class TreeNode {
  constructor(val, prev, next, is_locked) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.is_locked = is_locked;
  }
  lock(node) {
    if (node.prev.is_locked == false && node.next.is_locked == false) {
      node.is_locked = true;
      return true;
    }
    return false;
  }
  unlock(node) {
    if (node.is_locked == true) {
      node.is_locked = false;
      return true;
    }
    return false;
  }
}
