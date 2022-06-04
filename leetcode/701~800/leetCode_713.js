/*
bruthe force
O(N^2), O(1)

let count = 0;
for(let i = 0; i < nums.length; i++){
    let sum = nums[i];
    for(let j = i+1; j < nums.length; j++){
        sum *= nums[j];
        if(sum < k) count++;
    }
}
return count;

*/

/*
Optimal
O(N), O(1)
*/
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;
  let l = 0,
    r = 0;
  let sum = 1;
  let count = 0;
  while (r < nums.length) {
    sum *= nums[r];
    while (sum >= k) {
      sum /= nums[l++];
    }
    count += r - l + 1;
    r++;
  }
  return count;
};
