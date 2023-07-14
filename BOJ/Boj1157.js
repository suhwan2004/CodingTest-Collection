function Main() {
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .toUpperCase();

  let map = new Map();
  let reverseMap = new Map();

  //O(N)
  for (let i = 0; i < input.length; i++) {
    map.set(input[i], (map.get(input[i]) || 0) + 1);
  }

  //O(52) => constant
  for (let [key, value] of map.entries()) {
    if (reverseMap.has(value)) reverseMap.get(value).push(key);
    else reverseMap.set(value, [key]);
  }

  let max = 0;
  for (let key of reverseMap.keys()) {
    max = Math.max(max, key);
  }

  let resultArr = reverseMap.get(max);
  console.log(resultArr.length > 1 ? "?" : resultArr[0]);
}

Main();
