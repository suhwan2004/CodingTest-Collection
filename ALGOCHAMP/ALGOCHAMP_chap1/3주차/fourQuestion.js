/*
     [] 1 2 3 4 5 6 7 8 9 10
  []  0 0 0 0 0 0 0 0 0 0 0 
[1,2] 0 0 1 1 1 1 1 1 1 1 1
[4,3] 0 0 1 4 4 5 5 5 5 5 5
[5,6] 0 0 1 4 4 5 5 5 6 9 9
[6,7] 0 0 1 4 4 5 5 6 6 9 10

이 숫자들을 계산하는 법
1. 가로줄특정숫자 - 세로줄[0] = 남은 무게값.
2. 남은 무게값이 1. 0 미만이면 추가적인 조치없이 continue 2. 0이상이면 [i-1] 줄에 있는 것 중에 남은 무게값이랑 똑같은 가로줄의 값을 찾고 넣어줌.
3. 2의 두번째 과정을 거친 값이랑 [i-1][j]의 값과 비교해서(한칸 밑의 값) 더 큰 값을 넣어줌.


백트레킹 하는법
1.밑에서부터 capacity - items의 무게  = 남은 값을 구할 수 있으면 값을 기록하고 한칸 내려간다.
2. 남은값이랑 뺐을 때 minus이면 continue
3. 뺄 수있으면 빼주고 종료.
*/

const items = [
  [1, 2],
  [4, 3],
  [5, 6],
  [6, 7],
];
const capacity = 10;

const solution = (items, capacity) => {
  const dp = Array.from(Array(items.length + 1), () => Array(capacity + 1));
  for (let i = 0; i <= items.length; i++) {
    dp[i][0] = 0;
    for (let j = 0; j <= capacity; j++) {
      let weight = capacity;
      if (i == 0) {
        dp[i][j] = 0;
        continue;
      }
      if (j - items[i - 1][1] < 0) {
        if (dp[i - 1][j] >= 0) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = 0;
        }
      } else if (j - items[i - 1][1] >= 0) {
        let sum = items[i - 1][0]; // 일단 정당하게 뺄 수 있는 값의 value 더하기.
        let min = j - items[i - 1][1]; //빼고 남은 무게
        for (let k = 0; k <= capacity; k++) {
          if (k == min) {
            // for문을 돌며 i-1 줄에서 빼고 남은 무게에 맞는 위치 찾기.
            sum += dp[i - 1][k]; // 있다면야 더해주자.
          }
        }
        if (sum > dp[i - 1][j]) {
          //한칸 아래 값보다 지금 구한 값이 더 크면...
          dp[i][j] = sum;
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }
  }
  let weight = capacity;
  let res = [];
  let returnArr = [];
  for (let i = items.length; i >= 0; i--) {
    if (i == 0) {
      break;
    }
    if (weight - items[i - 1][1] >= 0) {
      // 뺄 수 있는 무게다?
      weight -= items[i - 1][1]; // 무게를 빼주고
      res.push(i - 1); // res에 이게 items의 몇번째 값인지 넣어주고 continue;
      continue;
    } else {
      continue;
    }
  }
  res.sort((a, b) => a - b);
  returnArr.push(dp[items.length][capacity]);
  returnArr.push(res);

  return returnArr;
};

console.log(solution(items, capacity));
