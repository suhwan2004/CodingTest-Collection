var findLonelyPixel = function (picture) {
  let rowMap = new Map();
  let colMap = new Map();
  let res = 0;
  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < picture[0].length; j++) {
      if (picture[i][j] === "B") {
        let set = new Set(),
          set1 = new Set();
        rowMap.set(i, rowMap.get(i) + 1 || 1);
        colMap.set(j, colMap.get(j) + 1 || 1);
      }
    }
  }
  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < picture[0].length; j++) {
      if (
        picture[i][j] === "B" &&
        rowMap.has(i) &&
        rowMap.get(i) === 1 &&
        colMap.has(j) &&
        colMap.get(j) === 1
      )
        res++;
    }
  }
  return res;
};
