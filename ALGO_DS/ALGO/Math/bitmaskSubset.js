function bitmaskSubset(input) {
  const res = [];
  for (let i = 0; i < 1 << input.length; i++) {
    let str = "";
    for (let j = 0; j < input.length; j++) {
      if ((i & (1 << j)) != 0) {
        str += `${input[j]} `;
      }
    }
    res.push(str);
  }
  console.log(res);
}

bitmastSubset([3, 6, 10, 14, 222]);
