class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
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
    console.log(curNode.value);
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

const li = new LinkedList(1);
li.insert(2, 1);
li.insert(3, 2);
li.insert(4, 3);
li.insert(5, 4);
li.insert(6, 5);
li.insert(7, 6);

//1, 7;

const solution = (li) => {
  let start = li.head.value;
  let location = li.findPrevious(null).value; // 가장 끝단의 위치를 찾음.
  let c = location;
  const nli = new LinkedList(1);

  for (let i = start; i <= start + (location - start) / 2; i++) {
    if (i == start) {
      nli.insert(c, i);
    } else {
      nli.insert(i, c);
      c--;
      if (c == i) {
        break;
      }
      nli.insert(c, i);
    }
  }
  nli.display(); //리턴없이 모습을 보여줬음.
};

solution(li);
