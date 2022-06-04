/*
Optimal이라고 할 수 있을까...?
Time : O((N-3)*(N-3)*(N-2)) => 대략 O(N^3)이 나올 것...
Space : ?? => 4sum 계산내역이 담기는 건 맞는데 최악의 경우가 어떨 때 나오는 건지 헷갈림. O(N^2)까진 안나올 것 같긴 한데...

0,1,2, => n-3
  1 2 3 => n-3
    2,3,4,5 => n-2
*/
function solution(array, target) {
  if (array.length === 0) return []; // edge case
  array.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < array.length - 3; i++) {
    //time : O(N-3)
    for (let j = i + 1; j < array.length - 2; j++) {
      //time : O(N-3)
      let l = j + 1,
        r = array.length - 1;
      let sum = array[i] + array[j];
      let arr = [array[i], array[j]];
      while (l < r) {
        //time : O(N-2)
        let newSum = sum + array[l] + array[r];
        if (newSum === target) {
          //sum이 target과 같을 경우. => r--;
          res.push([...arr, array[l], array[r]]);
          r--;
        } else if (newSum > target) {
          //sum이 target보다 클 경우. => r--;
          r--;
        } else {
          //sum이 target보다 작을 경우 => l++
          l++;
        }
      }
    }
  }
  return res;
}
console.log(solution([7, 6, 4, -1, 1, 2], 16));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 13));
console.log(solution([0, 0, 0, 0], 13)); // 될 수 없는 target 값일 시 빈 배열이 반환됨.
