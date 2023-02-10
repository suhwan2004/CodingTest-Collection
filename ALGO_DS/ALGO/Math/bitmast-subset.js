function bitmastSubset(len) {
  const input = new Array(len).fill(0);
  const res = [];
  for (let i = 0; i < 1 << len; i++) {
    let str = "";
    for (let j = 0; j < len; j++) {
      str += (i & (1 << j)) != 0 ? input[j] : "X";
    }
    res.push(str);
  }
  console.log(res);
}

bitmastSubset(3);
