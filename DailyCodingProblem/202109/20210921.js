/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

what if you can't use division?

*/
//bruthe force => O(n^2)
/*
const solution = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let val = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;
      val *= arr[j];
    }
    res.push(val);
  }
  return res;
};

console.log(solution([1, 2, 3, 4, 5]));
*/

const solution = (arr) => {
  let val = 1;
  let count = 0;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      count++;
      continue;
    }
    if (count == 2) break;
    val *= arr[i];
  }

  if (count == 2) {
    return arr.fill(0);
  }

  for (let i = 0; i < arr.length; i++) {
    if (count == 0) {
      res.push(val / arr[i]);
    } else {
      if (arr[i] == 0) {
        res.push(val);
      } else {
        res.push(0);
      }
    }
  }
  return res;
};
console.log(solution([1, 2, 0, 4, 5]));
