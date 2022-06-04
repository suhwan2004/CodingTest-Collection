/*
퀵 소트 구현
1.먼저 입력 배열의 첫번째 값을 "기준값"으로 설정.
2.입력 배열을 한 차례 돌면서 pivot보다 작으면 left, 크면 right, 같으면 pivot 배열으로 보낸다.
3.재귀적으로 반복하면되고, 마지막에 다시 리턴값이 돌아오면 다 맞춰져 있을 것임.

시간복잡도 : 평균 O(NlogN)이나 피벗값이 최대 or 최소값으로 지정되어 파티션이 나눠지지 않는 경우가 발생하면 O(N^2)
공간복잡도 : O(N)
*/

function QuickSort(input) {
  if (input.length < 2) return input;

  let pivot = [input[0]];
  let left = [],
    right = [];

  for (let i = 1; i < input.length; i++) {
    if (input[i] < pivot) left.push(input[i]);
    else if (input[i] > pivot) right.push(input[i]);
    else pivot.push(input[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(QuickSort([5, 1, 3, 7, 6]));
