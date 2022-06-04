var lastStoneWeight = function (stones) {
  let arr = stones.slice();
  while (arr.length >= 2) {
    let fMax = -Infinity,
      sMax = -Infinity;
    let fP = -1,
      sP = -1;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (fMax < arr[i]) {
        sMax = fMax;
        sP = fP;
        fMax = arr[i];
        fP = i;
      } else {
        if (sMax < arr[i]) {
          sMax = arr[i];
          sP = i;
        }
      }
    }
    if (fMax === sMax) {
      for (let i = 0; i < arr.length; i++) {
        if (i === fP || i === sP) continue;
        newArr.push(arr[i]);
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (i === sP) continue;
        newArr.push(fP === i ? fMax - sMax : arr[i]);
      }
    }
    arr = newArr.slice();
  }
  return arr.length === 0 ? 0 : arr[0];
};
