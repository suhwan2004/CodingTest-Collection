/*
Input : int array(nums...), int(target)
Output : int 2d array(number to closest to target)
Constraints :
 - 3 <= nums.length <= 1000
 - -1000 <= nums[i] <= 1000
 - -104 <= target <= 104
E : if (nums.length < 3) return [];
*/

/*
DS : x
ALGO : Sort, two pointer
Time : O(N^2)
Space : O(1)
*/
var threeSumClosest = function (input, target) {
  let min = -Infinity;

  if (input.length === 3) {
    let sum = 0;
    for (let i of input) sum += i;
    return sum;
  }

  input.sort((a, b) => a - b);

  for (let i = 0; i < input.length - 2; i++) {
    let l = i + 1,
      r = input.length - 1;

    while (l < r) {
      let sum = input[i] + input[l] + input[r];
      if (Math.abs(target - sum) < Math.abs(target - min)) min = sum;
      if (target - sum > 0) {
        let lVal = input[l];
        while (lVal === input[l]) {
          l++;
        }
      } else {
        let rVal = input[r];
        while (rVal === input[r]) {
          r--;
        }
      }
    }
  }
  return min;
};
