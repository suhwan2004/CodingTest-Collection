/*

Start : 6:00 ~ 6:09(Bruthe)
Given two strings A and B, return whether or not A can be shifted some number of times to get B.

For example, if A is abcde and B is cdeab, return true. If A is abc and B is acb, return false.
*/

/*
Bruthe force : 실제로 만들어서 돌려보는 것.
Time : O(N * 3N) => O(N^2)
Space : O(N) => create word
*/
function Bruthe(A, B) {
  if (A.length !== B.length) return false; // edge case
  let turn = 0;
  //O(N * N) => O(N^2);
  while (turn !== A.length) {
    let word = A.split("");
    word.unshift(word.pop()); // O(N)

    A = word.join(""); // O(N)
    if (A === B) return true; // O(N)
    turn++;
  }
  return false;
}

/*
Optimal Solution : 어렵드아... 사실 Optimal이 없던 문제였던 것같음. 문제 사이트도 O(N^2) 솔루션이 나오네...

*/
function Optimal(A, B) {
  if (A.length !== B.length) return false; // edge case
}

console.log(Bruthe("abcde", "cdeab"));
console.log(Bruthe("abc", "acb"));

console.log(Optimal("abcde", "cdeab"));
console.log(Optimal("abc", "acb"));
