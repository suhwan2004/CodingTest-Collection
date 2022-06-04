var repeatedStringMatch = function (A, B) {
  const startArr = [];
  let min = Infinity;
  for (let i = 0; i < A.length; i++) if (A[i] === B[0]) startArr.push(i); //A가 더 클수도 있기에 시작위치를 A로 했음.
  if (!startArr.length) return -1;

  for (let i of startArr) {
    let repeat = help(i);
    min = repeat !== -1 ? Math.min(min, repeat) : min;
  }
  return min === Infinity ? -1 : min;

  function help(idx) {
    let a = idx;
    let b = 0;
    let count = 1;
    while (b < B.length) {
      if (a >= A.length) {
        count++;
        a = 0;
      }
      let charA = A[a],
        charB = B[b];
      if (charA !== charB) {
        //같지 않다면더 볼 필요 없음.
        return -1;
      }
      a++, b++;
    }
    return count;
  }
};
var repeatedStringMatch = function (A, B) {
  const startArr = [];
  let min = Infinity;
  for (let i = 0; i < A.length; i++) if (A[i] === B[0]) startArr.push(i); //A가 더 클수도 있기에 시작위치를 A로 했음.
  if (!startArr.length) return -1;

  for (let i of startArr) {
    let repeat = help(i);
    min = repeat !== -1 ? Math.min(min, repeat) : min;
  }
  return min === Infinity ? -1 : min;

  function help(idx) {
    let a = idx;
    let b = 0;
    let count = 1;
    while (b < B.length) {
      if (a >= A.length) {
        count++;
        a = 0;
      }
      let charA = A[a],
        charB = B[b];
      if (charA !== charB) {
        //같지 않다면더 볼 필요 없음.
        return -1;
      }
      a++, b++;
    }
    return count;
  }
};
