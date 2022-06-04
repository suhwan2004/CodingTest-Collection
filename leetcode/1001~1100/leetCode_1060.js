/*
1060. Missing Element in Sorted Array

배열을 사용하여 k번째 빈 숫자를 찾으면 됨. 배열에서 값 사이에 낑겨 있거나 아예 배열 뒤로 넘어갈 수도 있음.
*/

/*
Bruth force solution

Time : O(N)
Space : O(1)
*/

var missingElementBruth = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] - 1 !== 0) {
      for (let j = nums[i] + 1; j < nums[i + 1]; j++) {
        if (++count === k) return j;
      }
    }
  }
  return nums[nums.length - 1] + (k - count);
};

/*
My Optimal Solution #follow up!
Time : O(logN)
Space : O(1)
*/

function optimalSolution(nums, k) {
  let l = 0,
    r = nums.length - 1;
  let val = help(l, r);
  let cost;
  if (val < k) return k - val + nums[nums.length - 1];

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);
    let prevVal = help(0, l);
    let leftVal = prevVal + help(l, mid);
    let rightVal = leftVal + help(mid, r);

    if (k < leftVal) r = mid;
    else if (k > rightVal) l = mid;
    else if (leftVal <= k && k <= rightVal) {
      if (prevVal === k) {
        cost = k;
        return checkNum(0, l);
      } else if (leftVal === k) {
        cost = k - prevVal;
        return checkNum(l, mid);
      } else {
        cost = k - leftVal;
        return checkNum(mid, r);
      }
    }
  }

  function checkNum(left, right) {
    for (let i = left; i < right; i++) {
      if (nums[i] + 1 != nums[i + 1] && help(i, i + 1) >= cost)
        return nums[i] + cost;
      else cost -= help(i, i + 1);
    }
  }

  function help(left, right) {
    if (left === right) return 0;
    return nums[right] - nums[left] + 1 - 2 - (right - left - 1);
  }
}

/*
LeetCode Optimal Solution
*/

function leetCodeOptimal(nums, k) {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);

    const numMissed = nums[mid] - nums[0] - mid;

    if (numMissed < k) l = mid + 1;
    else r = mid;
  }

  const totalMissed = nums[l] - nums[0] - l;
  if (totalMissed >= k) return nums[l] - 1 - (totalMissed - k);
  else return nums[l] + (k - totalMissed);
}
