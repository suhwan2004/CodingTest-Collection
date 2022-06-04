/*
Input : int Array(nums), int(k)
Output : int Array( rotate the array to the right by k steps)
Contraints : 
 - 1 <= nums.length <= 10^5
 - -2^31 <= nums[i] <= 2^31 - 1
 - 0 <= k <= 10^5
 - Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
 - Could you do it in-place with O(1) extra space?
E : x
*/

//bruthe force
/*
Time : O(N^2) => N === nums.length
Space : O(1)

pop으로 뺀 값을 맨 처음으로 넣는 방법.
k의 경우 constraints에서 가장 큰 값이 nums.length와 동일하기 때문에 
max_k * max_nums.length => O(N^2)의 시간복잡도가 나온다.
*/

var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let val = nums.pop(nums[i]);
    nums.unshift(val);
  }
  return nums;
};

//Optimal Solution
/*
    Time : O(2N) => O(N)
    Space : O(1);
*/

var rotate = function (nums, k) {
  k %= nums.length; // 배열의 길이보다 k가 더 클 경우 방지
  if (k === 0) return; // 만약 k가 0이라면 돌릴 이유가 없음.

  nums.reverse(); // O(N)
  reverseSubArr(nums, 0, k - 1);
  reverseSubArr(nums, k, nums.length - 1);
};

function reverseSubArr(arr, s, e) {
  while (s < e) {
    [arr[s], arr[e]] = [arr[e], arr[s]];
    s++;
    e--;
  }
}
