/*
Input : String(number)
Output : int(the minimum number of positive deci-binary numbers needed so that they sum up to n)
Constraints : 
 - 1 <= n.length <= 105
 - n consists of only digits.
 - n does not contain any leading zeros and represents a positive integer.
Edge case : x
*/

/*
Bruth force Solution
Time : O(9N) => O(N) //N === input.length,
Space : O(N)
ALGO : while, for
DS : Array
*/
var minPartitions = function (n) {
  let arr = n.split("");
  let count = 0;
  let flag = true;
  while (flag) {
    let curCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "0") curCount++;
      else arr[i] = String(Number(arr[i]) - 1);
    }
    if (curCount === arr.length) flag = false;
    else count++;
  }

  return count;
};

/*
Optimal Solution

Time : O(N), N ===N.length
Space : O(1)
ALGO : for
DS : x
*/

var minPartitions = function (n) {
  let max = 0;

  for (let i = 0; i < n.length; i++) {
    max = Math.max(max, n[i] - "0");
  }
  return max;
};
