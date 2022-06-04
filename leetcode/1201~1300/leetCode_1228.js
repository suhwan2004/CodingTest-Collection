var missingNumber = function (arr) {
  let negative = arr[0] > arr[1] ? true : false;
  if (negative) arr = arr.reverse();

  let min = Infinity,
    max = -Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    let dif = arr[i + 1] - arr[i];
    min = Math.min(min, dif);
    max = Math.max(max, dif);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let dif = arr[i + 1] - arr[i];
    if (dif === max) {
      return min + arr[i];
    }
  }
};
