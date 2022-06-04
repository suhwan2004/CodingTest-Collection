/*
O(N) time or O(1) space

Time : O(3N + 5001) => O(N)
Space : O(N)
ALGO : counting sort, for
DS : array

1. 계수정렬을 한다.(시간 : O(N) , 공간 : O(N))
2. 정렬된 totalArr를 이용하여 nums의 값을 수정해준다.

*/

var wiggleSort = function (nums) {
  let baseArr = new Array(5001).fill(0);
  let totalArr = new Array(nums.length);

  //Time : O(N)
  for (let val of nums) {
    baseArr[val]++;
  }
  //Time : O(5000)
  for (let i = 1; i < baseArr.length; i++) {
    baseArr[i] += baseArr[i - 1];
  }
  //Time : O(N)
  for (let i = nums.length - 1; i >= 0; i--) {
    let target = nums[i];
    totalArr[baseArr[target] - 1] = target;
    baseArr[target]--;
  }

  let mid =
    nums.length % 2 === 0
      ? Math.floor(nums.length / 2)
      : Math.floor(nums.length / 2) + 1;
  let arr = totalArr.slice(0, mid),
    arr1 = totalArr.slice(mid);

  //Time : O(N)
  for (let i = 0; i < totalArr.length; i++) {
    nums[i] = i % 2 === 0 ? arr.pop() : arr1.pop();
  }
};
