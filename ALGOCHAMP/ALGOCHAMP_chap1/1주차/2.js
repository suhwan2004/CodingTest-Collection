/*
이 문제는 array로 loop를 돌면서 sequence 순으로 array의 요소가 들어가 있는지 확인함.
*/

let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

const solution = (arr, seq) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == seq[0]) seq.shift();
  }
  return seq.length == 0 ? true : false;
};

console.log(solution(array, sequence));
