var floodFill = function (image, sr, sc, newColor) {
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let arr = Array.from(Array(image.length), () =>
    Array(image[0].length).fill(false)
  );
  let color = image[sr][sc];
  dfs(sr, sc);
  return image;

  function dfs(row, col) {
    image[row][col] = newColor;
    arr[row][col] = true;
    for (let direction of directions) {
      let nRow = row + direction[0];
      let nCol = col + direction[1];
      if (
        nRow >= 0 &&
        nCol >= 0 &&
        nRow < image.length &&
        nCol < image[0].length &&
        image[nRow][nCol] === color &&
        !arr[nRow][nCol]
      ) {
        dfs(nRow, nCol);
      }
    }
  }
};
