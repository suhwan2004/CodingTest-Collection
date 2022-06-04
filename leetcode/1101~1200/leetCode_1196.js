/*
time : O(NlogN)
Space : O(N)*/
var maxNumberOfApples = function (weight) {
  weight.sort((a, b) => a - b);
  let sum = 0,
    count = 0;
  for (let i = 0; i < weight.length; i++) {
    sum += weight[i];
    count++;
    if (sum > 5000) {
      count--;
      break;
    }
  }
  return count;
};

/*
Time : O(N+M) N === weight.length, M === maxValue of weight[i]
Space : O(M)
*/
var maxNumberOfApples = function (weight) {
  let arr = new Array(1001).fill(0);
  let sum = 0,
    count = 0;
  for (let i = 0; i < weight.length; i++) {
    arr[weight[i]]++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      for (let j = 0; j < arr[i]; j++) {
        sum += i;
        count++;
        if (sum > 5000) {
          count--;
          break;
        }
      }
    }
  }
  return count;
};
