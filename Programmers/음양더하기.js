/*
input : integer array absolutes, boolean array signs
output : absolutes의 각 원소에 signs의 부호를 붙인 정수들의 합
Constraints : absolutes.length === signs.length
Edge case : x
*/

/*
time : O(N) => N === absolutes.length
space : O(1)
ALGO : for
DS : Array
*/
function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, idx) => acc + cur * (signs[idx] ? 1 : -1),
    0
  );
}
