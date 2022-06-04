var findJudge = function (N, trust) {
  if (trust.length === 0) {
    if (N === 1) return N;
    else return -1;
  }
  let arr = new Array(N + 1).fill(0);

  for (let i = 0; i < trust.length; i++) {
    arr[trust[i][0]] -= 1;
    arr[trust[i][1]] += 1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == N - 1) return i;
  }
  return -1;
};
