/*
8:08 ~ 8:38   => 36분 완료.

Input : linkedList
OutPut : node(cycle start)
C: value가 숫자일 것.
E: x
T: O(n)
S: O(1)

0 ~ 9 4  => 이 linkedList는 주어질 것이니 생각 안함.

f = s => 여기서 사이클이 일어나는 걸 알수 있는데
f > s => 이러면 사이클이 일어나는 부분을 s로 지정하자.
      Node(3)  => .....   Node(3) if(node.value == 3)

f f f f          
0 1 2 3 4 5 6 
          8 7
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(0);
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
  insertCycle(nextValue, newValue, value) {
    let newNode = new Node(newValue);
    let current = this.find(value);
    newNode.next = this.find(nextValue);
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
function solution(li) {
  let first = li.find(0);
  let second = li.find(0);
  let count = 0;
  let cycleP = 0;
  while (true) {
    if (count > 0 && count % 2 == 0) {
      first = first.next;
    }
    second = second.next;
    count++;
    if (first.value == second.value) {
      cycleP = first.value;
      break;
    }
    if (first.value > second.value) {
      cycleP = second.value;
      break;
    }
  }
  let startNode = li.find(cycleP);
  while (true) {
    let curValue = startNode.value;
    console.log(curValue);
    startNode = startNode.next;
    if (startNode.value == cycleP) {
      console.log(startNode.value);
      break;
    }
  }
}

let li = new LinkedList();

li.insert(1, 0);
li.insert(2, 1);
li.insert(3, 2);
li.insert(4, 3);
li.insert(5, 4);
li.insert(6, 5);
li.insert(7, 6);
li.insertCycle(5, 8, 7);
solution(li);
