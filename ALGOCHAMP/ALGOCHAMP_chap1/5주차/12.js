/* Problem
Write a function that takes in a sorted array of distinct integers and returns the first index in the array that is equal to the value at that index
In other words, your function should return the minimum index where index == array[index].

if there is no such index, your function should return -1.

Sample Input
  array = [-5,-3,0,3,4,5,9];

Sample Output
  3 // 3 == array[3]
*/

/*
간단하게 보면, Input 배열 값들 중에서 index와 value가 같은 것 하나를 리턴하는 것임.
일단, 생각을 해봐야 될 것이, min를 구한 이후 그 값이 다르다면 앞의 index는 쳐다볼 이유가 없음.
        l               m               r
ex )  [-2, -1, 0, 1, 4, 5, 6, 7, 9, 10, 11] => 이 것을 봤을 때, 가운데의 값은 1, 인덱스는3임.  0이 만약 1일 수도 있냐고 물어볼텐데 사전규칙에 동일한 value는 허락하지 않음.
그럼 자연스럽게 left를 mid로 옮기면 됨.
*/
//                         l
//                                  m
//                                             r
const arr = [-2, -1, 0, 3, 4, 5, 6, 7, 9, 10, 11];
function indexMatching(arr) {
  if (!arr.length) return -1;
  return binarySearch(arr);
}

function binarySearch(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    console.log(mid);
    if (mid === arr[mid] && arr[mid - 1] !== mid - 1) {
      // 이 값이 같은 값의 시작일 때
      return mid;
    }
    if (mid === arr[mid]) {
      // 값이 같기만 할 때, left를 mid -1로 옮김.
      left = mid - 1;
    }
    console.log(mid);
    if (arr[mid] < mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(indexMatching(arr));
