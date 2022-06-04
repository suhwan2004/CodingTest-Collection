const array = [1, 0, 0, -1, -1, 0, 1, 1];
const order = [0, 1, -1];

const solution = (arr, order) => {
  if (arr.length == 0) return [];
  if (order.length == 0) return array;
  let l = 0;
  let m = 1;
  let r = arr.length - 1;
  while (m <= r) {
    if (arr[l] != order[0] && arr[m] == order[0]) {
      // l값이 원하는 값이 아닌데, m이 l일때
      [arr[m], arr[l]] = [arr[l], arr[m]];
      if (arr[m] == order[1]) m++;
      if (arr[l] == order[0]) l++;
    } else if (arr[m] == order[2] && arr[r] != order[2]) {
      // r값이 원하는 값이 아닌데, m이 r값일 때
      [arr[m], arr[r]] = [arr[r], arr[m]];
      if (arr[m] == order[1]) m++;
      if (arr[r] == order[2]) r--;
    } else {
      if (arr[l] == order[0]) l++;
      if (arr[m] == order[1]) m++;
      if (arr[r] == order[2]) r--;
    }
  }
  return arr;
};

console.log(solution(array, order));
