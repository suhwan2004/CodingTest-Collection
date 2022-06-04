var canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length == 1 && flowerbed[0] == 0 && n == 1) return true;
  for (let i = 0; i < flowerbed.length; i++) {
    if (n == 0) break;
    if (flowerbed[i] == 1) {
      continue;
    } else {
      if (
        (i == 0 && flowerbed[i + 1] == 0) ||
        (i > 0 &&
          i < flowerbed.length - 1 &&
          flowerbed[i + 1] == 0 &&
          flowerbed[i - 1] == 0) ||
        (i == flowerbed.length - 1 && flowerbed[i - 1] == 0)
      ) {
        flowerbed[i] = 1;
        n--;
      }
    }
  }
  return n === 0 ? true : false;
};
