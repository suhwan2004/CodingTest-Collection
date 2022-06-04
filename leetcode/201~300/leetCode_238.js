/*
Input : int Array(nums)
Output : int Array(Product of nums Except Self)
Contraints : 
 - 2 <= nums.length <= 105
 - -30 <= nums[i] <= 30
 - The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 - Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
 - You must write an algorithm that runs in O(n) time and without using the division operation.
 E : x
*/

/*
Bruth Force
Time : O(N)
Space : O(N)
AlGO : for
DS : Array
*/

var productExceptSelf = function (nums) {
  let arr1 = [],
    arr2 = [];
  let val1 = 1,
    val2 = 1;
  for (let i = 0; i < nums.length; i++) {
    val1 *= nums[i];
    val2 *= nums[nums.length - 1 - i];

    arr1.push(val1);
    arr2.push(val2);
  }
  arr2.reverse();

  for (let i = 0; i < nums.length; i++) {
    let leftVal = i === 0 ? 1 : arr1[i - 1];
    let rightVal = i === nums.length - 1 ? 1 : arr2[i + 1];
    nums[i] = leftVal * rightVal;
  }
  return nums;
};
