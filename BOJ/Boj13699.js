function Main() {
  let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
  let map = new Map();
  map.set(0, 1n);

  function helpFunc(n) {
    if (map.has(n)) return map.get(n);
    let sum = 0n;
    for (let i = 0; i < n; i++) {
      let firstVal = helpFunc(i);
      let secondVal = helpFunc(n - i - 1);
      sum += firstVal * secondVal;
    }
    map.set(n, sum);
    return sum;
  }

  console.log(String(helpFunc(n)));
}

Main();
