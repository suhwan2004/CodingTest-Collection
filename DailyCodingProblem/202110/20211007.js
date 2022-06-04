/*
Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

10 = max(10, 5, 2)
7 = max(5, 2, 7)
8 = max(2, 7, 8)
8 = max(7, 8, 7)
Do this in O(n) time and O(k) space. 
You can modify the input array in-place and you do not need to store the results.
You can simply print them out as you compute them.
*/

/*
아래처럼 하면 당연히 arr.length만큼 한번 도니까 시간복잡도는 O(n)이 나올거고, 공간의 경우 O(1)이 나온다.
*/
10, 5, 2, 7, 8, 7;
function solution(arr) {
  let length = arr.length - 2;
  let val;
  for (let i = 0; i < length; i++) {
    if (i !== 0) arr[i - 1] = val;
    let max = Math.max(arr[i], arr[i + 1]);
    max = Math.max(arr[i + 2], max);
    val = max;
  }
  arr.pop();
  arr.pop();
  return arr;
}
console.log(solution([10, 5, 2, 7, 8, 7]));
