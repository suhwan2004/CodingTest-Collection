/*
leetCode 202. Happy Number
https://leetcode.com/problems/happy-number/

start : 2022.09.14 13:20 ~ 13:41
Input : positive Integer
Output : is this Happy Number?
Constraints : 1 <= n <= 2^31 - 1
Edge : x

My Solution
Time : O(logN)
Space : O(logN)
ALGO : for, while
DS : HashSet
*/

var isHappy = function (n) {
  let set = new Set();
  while (true) {
    n = n
      .toString()
      .split("")
      .reduce((prev, cur, idx) => +prev + Math.pow(+cur, 2), 0);
    if (n === 1) return true;
    if (set.has(n)) return false;
    set.add(n);
  }
};
