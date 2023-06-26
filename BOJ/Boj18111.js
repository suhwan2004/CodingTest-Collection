/*
해결법

땅을 고르기 위해서는 일단, 어떤 높이로 땅을 고를건지 생각해봐야 할 것 같음.

1. 입력값을 다 돌면서, 현재 각 높이 별의 갯수를 저장한다.
2. 0 ~ 256의 높이까지 다 보면서 시간과 높이를 비교하여 누적 저장한다.
*/

const testInput = '3 4 11\n29 51 54 44\n22 44 32 62\n25 38 16 2';
function Main() {
  /*let input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');
  */
  let input = testInput.split('\n');

  const [N, M, B] = input[0].split(' ').map((cur) => parseInt(cur));
  let boardMap = new Map();
  for (let i = 1; i <= N; i++) {
    input[i].split(' ').forEach((cur) => {
      boardMap.set(+cur, (boardMap.get(+cur) || 0) + 1);
    });
  }

  let minTime = Infinity;
  let minHeight = Infinity;
  const boardArr = Array.from([...boardMap]);
  boardArr.sort((a, b) => b[0] - a[0]);

  for (let curH = 0; curH <= 256; curH++) {
    let curTime = 0;
    let curInventory = B;

    //여기서는 각 key,value를 다 볼건 맞음. 하지만, 높이가 큰 순으로 조회해야 함.
    //왜냐하면, 계속 채우는 작업을 진행하다가 가지고 있는 블록이 부족해서 못했다는 상황이 발생했을 때
    //높은 순으로 공사를 진행해서 인벤토리가 더 풍족한 경우의 수가 있다면 그건 계산 미스로 오답이 될 것이기 때문임.

    for (const [k, v] of boardArr) {
      if (curH == k) continue;

      if (k > curH) {
        //현재 맞춰야 되는 기준높이보다, 지금의 땅이 더 높다면 땅을 깎고 인벤토리에 넣어준다.
        curTime += 2 * v * (k - curH);
        curInventory += v * (k - curH);
      } else {
        //기준 높이보다, 지금의 땅이 더 낮기 때문에 채워 넣어줘야 한다.

        //만약, 블록 수가 부족하다면 이후 계산도 성립될 수 없기 때문에 다음 높이 케이스로 넘기면 된다.
        let neededBlock = (curH - k) * v;
        if (neededBlock > curInventory) {
          curTime = Infinity;
          break;
        }
        curTime += neededBlock;
        curInventory -= neededBlock;
      }
    }

    if (minTime > curTime || (minTime === curTime && minHeight < curH)) {
      minTime = curTime;
      minHeight = curH;
    }
  }

  console.log(`${minTime} ${minHeight}`);
}

Main();
