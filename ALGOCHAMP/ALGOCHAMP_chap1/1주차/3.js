/*

배열 중 가장 큰 3개의 값을 저장한 배열을 리턴함.

그냥 간단하게 3n으로 해결했고, 이 것은 곧 O(n)이라고 볼 수 있다.
*/

let array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

const solution = (arr) => {
  let res = [];
  for (let i = 0; i < 3; i++) {
    let max = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[max] < arr[j]) max = j;
    }
    res.push(arr[max]);
    arr.splice(max, 1);
  }
  return res;
};
console.log(solution(array));
