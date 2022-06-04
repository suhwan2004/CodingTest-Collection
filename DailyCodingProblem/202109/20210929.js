/*
This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/

//setTimeout 함수를 이용하면 위의 내용 그대로 구현 가능하다...
function scheduler(fn, n) {
  setTimeout(fn, n);
}
