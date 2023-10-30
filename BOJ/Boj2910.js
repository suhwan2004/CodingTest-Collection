function Main() {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  let [[N, C], arr] = input.map((cur) => cur.split(" "));
  let map = new Map(); //순서 저장 map
  let obj = {};

  arr.forEach((cur) => {
    if (obj.hasOwnProperty(cur)) obj[cur]++;
    else {
      map.set(cur, map.size + 1);
      obj[cur] = 1;
    }
  });

  let objArr = Object.entries(obj);
  objArr.sort((a, b) => b[1] - a[1] || map.get(a[0]) - map.get(b[0]));

  let resArr = [];
  objArr.forEach((cur, idx) => {
    for (let i = 0; i < cur[1]; i++) {
      resArr.push(cur[0]);
    }
  });

  console.log(resArr.join(" "));
}

Main();
