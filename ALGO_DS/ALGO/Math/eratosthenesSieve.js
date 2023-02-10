//일반적인 소수 찾기
function normalPrimeNumberCheck(num) {
  let res = [];
  for (let i = 2; i <= num; i++) {
    let flag = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag) res.push(i);
  }
  console.log(res);
}

// 에라토스테네스의 체
function eratosthenesSieve(num) {
  let arr = new Array(num + 1).fill(true);
  arr[0] = false;
  arr[1] = false; //1은 무조건 소수가 될 수 없음.
  for (let i = 2; i <= num; i++) {
    if (arr[i] == false) continue;

    arr[i] = true;
    let curNum = i * 2;
    while (curNum <= num) {
      arr[curNum] = false;
      curNum += i;
    }
  }

  arr.forEach((cur, idx) => {
    if (cur) console.log(idx);
  });
}

console.log(normalPrimeNumberCheck(30));
