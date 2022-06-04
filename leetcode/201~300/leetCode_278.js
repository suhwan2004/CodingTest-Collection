/*
Input : function(isBadVersion), int(n)
Output : boolean(whether the version is bad)
Contraints :  1 <= bad <= n <= 2^31 - 1
E : x
*/

/*
Time : O(LogN * isBadVersion)
Space : O(1)
ALGO : Binary Search, for
DS : x
*/

var solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) right = mid - 1;
      else left = mid + 1;
    }
    return left;
  };
};
