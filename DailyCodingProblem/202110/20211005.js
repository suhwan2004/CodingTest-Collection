/*
You run an e-commerce website and want to record the last N order ids in a log. 
Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.
*/

//마지막 N개의 order id들을 로그에 저장하는 API를 만들어라.

class Log {
  constructor(size) {
    this.size = size;
    this.logArr = [];
    this.currIndex = 0;
  }

  record(orderId) {
    this.logArr[this.currIndex] = orderId;
    this.currIndex = (this.currIndex + 1) % this.size;
  }

  getLast(i) {
    return this.logArr[(this.currIndex - i + this.size) % this.size];
  }
}
