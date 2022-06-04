let array = [1, 8, 9, 10];
//   ^
// max + min + 3 + max   + max
// time = (max + min + rightMax + max) + (max + min + rightMax + max)

// [1, 2,  3, 4]   <=>   [2, 7, 10, 5, 6]
//  ^  ^   ^  ^

/*
let min = array[0];
let max = array[]

2,1   =>   2
1,7   =>   2,7
1,10  =>   1,2,7,10

1+1+2+7+10 =21분...

1,2 => 2
7,10 => 2,10
1,2 => 7,10

2+1+10+2+2 = 17분...

가장 작은 숫자를 먼저 옮기고, 다음은 가장 큰 숫자를 보내고 가장 작은 걸 가져옴. 

7, 10 -> 1, 2
1, 7, 10 -> 2
1 -> 2, 7, 10
1, 2 -> 7, 10


1. 왼쪽에서 가장 작은 숫자 2개 전송
--
2. 오른쪽에서 가장 작은 숫자 1개 전송
3. 왼쪽에서 가장 큰 숫자 2개 전송
4. 오른쪽에서 가장 작은 숫자 1개 전송
5. 왼쪽에서 가장 큰 숫자 2개 전송

입력값이 4개일 때,
오른쪽에서 두번째로 작은 숫자 1개 전송

*/

const solution = (array) => {
  //let left = array.sort((a,b) => a - b);
  let left = array;
  let leftMax = array[1];
  let leftMin = array[0];
  let oneCycle = leftMax + leftMin + leftMax;
  let rightMaxIdx = array.length - 1;
  let sum = 0;
  let count = 0;
  while (rightMaxIdx > 1) {
    count++;
    sum += left[rightMaxIdx];
    rightMaxIdx -= 2;
  }
  return sum + count * oneCycle + leftMax;
};

console.log(solution(array));

/*----------------------------------------------------------*/
