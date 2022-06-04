/*
Input : 2 int Array(nums1, nums2), 2 int(m, n)
Output : int Array(merged sorted Array)
Contraints : 
 - nums1.length == m + n
 - nums2.length == n
 - 0 <= m, n <= 200
 - 1 <= m + n <= 200
 - -109 <= nums1[i], nums2[j] <= 109
E : x
*/

/*
Bruth Force

Time : O((N+M)Log(N+M))
Space : O(1)
ALGO : Sort, for
DS : Array
*/

var merge = function (nums1, m, nums2, n) {
  var index = 0;
  for (let i = m; i < n + m; i++) {
    nums1[i] = nums2[index];
    index++;
  }

  return nums1.sort((a, b) => a - b);
};
