var findSolution = function (customfunction, z) {
  let x;
  let res = [];
  for (let i = 1; i <= 1000; i++) {
    x = i;
    let l = 1,
      r = 1000;
    while (l <= r) {
      let mid = l + Math.floor((r - l) / 2);
      let sum = customfunction.f(x, mid);
      if (sum === z) {
        res.push([x, mid]);
        break;
      } else if (sum > z) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return res;
};
