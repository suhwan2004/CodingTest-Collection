var tribonacci = function (n) {
  if (n === 0 || n === 1) return n;
  if (n === 2) return 1;
  let first = 0,
    second = 1,
    third = 1,
    current;

  for (let i = 3; i <= n; i++) {
    current = first + second + third;
    first = second;
    second = third;
    third = current;
  }
  return current;
};
