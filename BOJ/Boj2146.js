function Main() {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  if (input[0] == 0) {
    console.log(0);
    return 0;
  }

  let arr = input.slice(1);
  let val = Math.round(+input[0] * 0.15);
  arr.sort((a, b) => Number(a) - Number(b));

  console.log(
    Math.round(
      arr.reduce(
        (acc, cur, idx) =>
          (acc += val > idx || arr.length - val - 1 < idx ? 0 : +cur),
        0
      ) /
        (arr.length - 2 * val)
    )
  );
}

Main();
