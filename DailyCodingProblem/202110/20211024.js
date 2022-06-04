/*
Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
*/

// 시간 : O(N), 공간 : O(1) 내로 나와야 함.
/*
 */
function solution(arr) {
  let l = 0,
    r = arr.length - 1,
    mid = Math.floor(arr.length / 2);
  while (mid <= r) {
    console.log(arr);
    if (arr[mid] === "R") {
      [arr[l], arr[mid]] = [arr[mid], arr[l]];
      l++;
      mid++;
    } else if (arr[mid] == "G") {
      mid++;
    } else {
      [arr[mid], arr[r]] = [arr[r], arr[mid]];
      r--;
    }
  }
  return arr;
}

console.log(solution(["G", "B", "R", "R", "B", "R", "G"]));
