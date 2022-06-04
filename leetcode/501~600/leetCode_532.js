/*
time : O(N);
Space : O(N);
*/
var findPairs = function (nums, k) {
  let map = new Map();
  let count = 0;

  //key : num   ,  value : count of num
  for (num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }

  for (let [key, val] of map) {
    if (k === 0) {
      //두 개 이상 있다면 ex) 2-2 = 0 이 될수 있음.
      if (val > 1) count++;
    } else {
      //k가 0이 아닐때. ? - key = k =>    ? = key + k
      if (map.has(key + k)) count++;
    }
  }

  return count;
};
