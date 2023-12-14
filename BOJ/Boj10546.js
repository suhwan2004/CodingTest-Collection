function Main() {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(`\n`);

  const N = Number(input[0]);
  const participants = {};

  for (let i = 1; i <= N; i++) {
    const name = input[i];
    participants[name] = (participants[name] || 0) + 1;
  }

  for (let i = N + 1; i < 2 * N; i++) {
    const name = input[i];
    participants[name] -= 1;
  }

  let notCompletedName = Object.keys(participants).find(
    (name) => participants[name] > 0
  );

  console.log(notCompletedName);
}

Main();
