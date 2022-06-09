/*
Bruth force
Time : O(2N) => O(N)
Space : O(N)
ALGO : for
DS : Array
*/
var findMaxConsecutiveOnes = function (nums) {
  if (nums.length === 1) return 1;

  let arr = [];
  let max = 0;
  let count = 0,
    count1 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (count1 > 0) {
        arr.push([count1]);
        count1 = 0;
      }
      count++;
    } else {
      if (count > 0) {
        arr.push(count);
        count = 0;
      }
      count1++;
    }
  }
  if (count !== 0) arr.push(count);
  else if (count1 !== 0) arr.push([count1]);

  if (arr.length === 1) return typeof arr[0] === "object" ? arr[0][0] : 1;

  for (let i = 0; i < arr.length; i++) {
    let left = i - 1 >= 0 ? arr[i - 1][0] : 0;
    let right = i + 1 <= arr.length - 1 ? arr[i + 1][0] : 0;
    if (typeof arr[i] !== "object") {
      if (arr[i] === 1) max = Math.max(max, left + right + 1);
      else
        max = Math.max(
          max,
          left === 0 ? 0 : left + 1,
          right === 0 ? 0 : right + 1
        );
    }
  }

  return max;
};

/*
Optimal Solution
Time : O(N)
Space : O(1)
AlGO : Sliding window
DS : Array
*/

const findMaxConsecutiveOnes = (nums) => {
  let maxCount = 0,
    curCount = 0,
    curZeros = 0,
    zeroIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) curCount += 1;
    else if (curZeros === 0) {
      curZeros = 1;
      curCount += 1;
      zeroIndex = i;
    } else {
      if (curCount > maxCount) maxCount = curCount;
      curCount = i - zeroIndex;
      zeroIndex = i;
    }
  }

  return Math.max(maxCount, curCount);
};
