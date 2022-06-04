var fib = function (n) {
  if (n === 0 || n === 1) return n;

  let first = 0,
    second = 1;
  let res = 0;
  for (let i = 2; i <= n; i++) {
    res = first + second;
    first = second;
    second = res;
  }
  return res;
};
