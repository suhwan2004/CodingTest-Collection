/*Implement a stack that has the following methods:

push(val), which pushes an element onto the stack
pop(), which pops off and returns the topmost element of the stack. If there are no elements in the stack, then it should throw an error or return null.
max(), which returns the maximum value in the stack currently. If there are no elements in the stack, then it should throw an error or return null.
Each method should run in constant time.
*/

class stack {
  constructor() {
    this.store = [];
    this.maxes = [];
  }
  push(val) {
    this.store.push(val);
    if (this.maxes.length === 0) {
      this.maxes.push(val);
    } else {
      this.maxes.push(this.maxes[this.maxes.length - 1], val);
    }
  }
  pop() {
    if (this.store.length === 0) return null;
    let val = this.store.pop();
    this.maxes.pop();
    return val;
  }
  max() {
    if (this.maxes.length === 0) return null;
    return this.maxes[this.maxes.length - 1];
  }
}
