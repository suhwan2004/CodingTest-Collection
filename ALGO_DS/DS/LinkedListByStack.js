class LinkedListByStack {
  top;

  push(e) {
    this.top = new Node(e, this.top);
  }

  isEmpty() {
    return this.top === null;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("공백스택");
    }
    const popNode = this.top;
    this.top = popNode.link;
    popNode.link = null;
    return popNode.data;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("공백스택");
    }
    return this.top.data;
  }

  size() {
    let res = 0;
    for (let temp = this.top; temp != null; temp = temp.link) {
      res++;
    }
    return res;
  }
}

class Node {
  data;
  link;
  constructor(data = null, link = null) {
    this.data = data;
    this.link = link;
  }

  toString() {
    return `{data : ${this.data}, link : ${this.link}}`;
  }
}

function StackTest() {
  const stack = new LinkedListByStack();
  stack.push("김수민");
  stack.push("전임송");
  stack.push("박은정");
  stack.push("송진현");

  console.log("stack size is : ", stack.size());
  console.log(stack.top.toString());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());

  console.log("stack size is : ", stack.size());
}

StackTest();
