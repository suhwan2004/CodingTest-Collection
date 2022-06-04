var findTheWinner = function (n, k) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
  }
  let point = 0;
  while (arr.length != 1) {
    let loc = point + (k - 1);
    let val;
    if (arr.length - 1 >= loc) {
      arr.splice(loc, 1);
      point = loc;
    } else {
      val = loc % arr.length;
      arr.splice(val, 1);
      point = val;
    }
  }
  return arr[0];
};
