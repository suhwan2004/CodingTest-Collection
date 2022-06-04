class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(1);
  }
  find(value) {
    let curNode = this.head;
    while (curNode.value != value) {
      curNode = curNode.next;
    }
    return curNode;
  }
  insert(newValue, value) {
    let newNode = new Node(newValue);
    let current = this.find(value);
    newNode.next = current.next; // current와 같은 next를 보게함.
    current.next = newNode; // 글고 그 사이에 끼워넣기.
  }
  display() {
    let curNode = this.head;
    while (curNode.next !== null) {
      console.log(curNode.next.value);
      curNode = curNode.next;
    }
  }
  findPrevious(value) {
    let currNode = this.head;
    while (!(currNode.next == null) && currNode.next.value != value) {
      currNode = currNode.next;
    }
    return currNode;
  }
  remove(value) {
    let prevNode = this.findPrevious(value);
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
  }
}
