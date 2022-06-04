/*
DS : Map, array
ALGO : for, sort

time : O(nlogn)
space : O(n);
*/
var arrayRankTransform = function (arr) {
  let arr1 = arr.slice();

  arr1.sort((a, b) => a - b); //nlogn
  let map = new Map();

  let count = 1;
  for (let i = 0; i < arr1.length; i++) {
    if (map.get(arr1[i])) {
      continue;
    }
    map.set(arr1[i], count);
    count++;
  }
  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i])) arr[i] = map.get(arr[i]);
  }
  return arr;
};
