/*
Input : int Array(nums), int(target)
Output : int (target보다 작거나 같은 3Sum 모든 조합의 갯수)
Contraints : 
 - n == nums.length
 - 0 <= n <= 3500
 - -100 <= nums[i] <= 100
 - -100 <= target <= 100
E : x 
*/

/*
    Bruth force Solution
    Using 3 for... 모두 다본다.
    Time : O(N^3)
    Space : O(1)
    ALGO : for
    DS : Array

    let count = 0;
    for(let i = 0; i < nums.length-2; i++){
        for(let j = 0; j < nums.length-1; j++){
            for(let k = 0; k < nums.length; k++){
                if((nums[i]+nums[j]+nums[k]) < target) count++;
            }
        }
    }
    return count;
*/

/*
    Optimal Solution
    using two pointer...
    Time : O(N^2)
    Space :O(1);
    ALGO : Sort, two pointer
    DS : Array
*/
var threeSumSmaller = function (nums, target) {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i,
      m = i + 1,
      r = nums.length - 1;
    while (m < r) {
      let sum = nums[l] + nums[m] + nums[r];
      if (sum < target) {
        count += r - m;
        m++;
      } else r--;
    }
  }
  return count;
};
