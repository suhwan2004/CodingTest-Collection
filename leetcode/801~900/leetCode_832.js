var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let arr = [];
    for (let j = 0; j < image[i].length; j++) {
      arr.unshift(image[i][j] == 0 ? 1 : 0);
    }
    image[i] = arr;
  }
  return image;
};
