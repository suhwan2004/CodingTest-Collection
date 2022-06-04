/*
20분 덜 되게 걸린듯함.

input : int array
output : int
c : x
edge : x

DS : array
algo : two pointer
time : O(nlogn) => n x n 느낌으로 다 돌지 않아서 책정.
space : O(1)  => 따로 지정한 배열 없음... 콜 스택도 따로 없는 듯 함.
*/

array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];

const solution = (arr) => {
  let max = -Infinity;
  let point = 0;
  let sum = 0;
  let flag = 0;
  for (let i = 1; i < arr.length; i++) {
    if (flag == 0) {
      // 값 넣어주기.
      sum = arr[point] + arr[i];
      flag = 1;
    } else {
      sum = sum + arr[i];
    }

    if (sum > max) {
      // max 갱신.
      max = sum;
    }

    if (i == arr.length - 1) {
      //끝에 달했을 때 시작점 변경.
      point++;
      i = point;
      sum = 0;
      flag = 0;
      if (point == arr.length - 1) {
        break;
      }
    }
  }
  return max;
};

console.log(solution(array));
