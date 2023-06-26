function Main() {
  let input = require('fs').readFileSync('/dev/stdin').toString();
  input = parseInt(input);
  const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let result = 0,
    date = 13;
  for (let y = 2019; y <= input; y++) {
    for (let m = 1; m <= 12; m++) {
      if (date % 7 === 4) result++;
      date += days[m];
      if (m === 2 && ((y % 4 === 0 && y % 100 != 0) || y % 400 === 0)) date++;
    }
  }
  console.log(result);
}

Main();
