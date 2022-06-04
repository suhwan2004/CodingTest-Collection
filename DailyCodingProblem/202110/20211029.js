/*
Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.

For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.

Do this in O(N) time and O(1) space

해석해보자면 특정한 값이 3번 반복되는 int형 배열이 주어짐
여기에서 고유한 값을 반환하는 것....
시간은 O(N), 공간은 O(1)
*/

//bruthe force solution
//time : O(N), space : O(N), N === input.length
let input = [6, 1, 3, 3, 3, 6, 6];
/*
function solution(input) {
  if (input.length === 0) return null;

  let map = new Map();
  for (let i = 0; i < input.length; i++) {
    if (map.has(input[i])) map.set(input[i], map.get(input[i]) + 1);
    else map.set(input[i], 1);
  }
  for (let [k, v] of map) if (v === 1) return k;
}
console.log(solution(input));
*/

//Optimal solution
/*
일단 DS를 아예 사용에서 배제하는게 맞음.
그러면 알고리즘으로 봐야되는 건데... O(N)이 나오는 ALGO는...
two pointer, for, sliding window, 


*/
function solution(input) {}
