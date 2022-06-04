const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

const Solution = (arr, sum, n) => {
  n++;
  for (let index = 0; index < arr.length; index++) {
    if (Array.isArray(arr[index])) {
      sum += n * Solution(arr[index], 0, n);
    } else {
      sum += arr[index];
    }
  }
  return sum;
};

console.log(Solution(array, 0, 1));
