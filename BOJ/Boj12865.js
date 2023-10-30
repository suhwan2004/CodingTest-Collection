/*

준서가 버티는 무게 : 10
1,6
2,5
3,10
4.1

1일때, 6
2일 떼, 6
3일 때, 11
4일 때, 16
5일 때, 16
6일 때, 21
7일 때, 22
*/

function Main() {
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const [N, K] = input[0].split(" ").map((cur) => +cur);
  input.unshift();
  const arr = input.map((cur) => {
    const tempArr = cur.split(" ").map((cur1) => +cur1);
    tempArr.push(false);
  });
  arr.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  let bag = [];
  for (let i = 0; i <= K; i++) {
    bag[i] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    const curItem = arr[i]; // weight, value
    let max = 0;
    for (let i = 0; i < bag.length; i++) {
      if (i === curItem[0]) {
        if (bag[i] < curItem[1]) bag[i] = curItem[1];
      } else if (i > curItem[0]) {
        if (curItem[1] + bag[i - curItem[0]] > bag[i])
          bag[i] = Math.max(max, curItem[1] + bag[i - curItem[0]]);
      }
      max = Math.max(bag[i], max);
    }
  }
  return bag;
}
Main();
