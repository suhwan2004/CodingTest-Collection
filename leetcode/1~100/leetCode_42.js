/*
Input : int array(height)
Output : int(how much water it can trap after raining)
Contraints : 
 - n == height.length
 - 1 <= n <= 2 * 104
 - 0 <= height[i] <= 105
E : if (height == null || height.length === 0) return 0;
*/

/*

Solution
투 포인터 컨셉트
왼쪽0, 오른쪽  height.length-1
lmax, rmax를 둔다.
값을 갱신하며 현재 l값보다 lmax가 더 크다면 그건 물이 생긴것이므로 추가.
              현재 r값보다 rmax가 더 크다면 그건 물이 생긴 것이므로 추가.

Time : O(N)
Space : O(1)
ALGO : Two pointer
DS : x
*/
function trap(height) {
  if (height == null || height.length === 0) return 0;
  let left = 0,
    right = height.length - 1,
    lmax = 0,
    rmax = 0;
  let res = 0;
  while (left < right) {
    lmax = Math.max(lmax, height[left]);
    if (height[left] < lmax) res += lmax - height[left];

    rmax = Math.max(rmax, height[right]);
    if (height[right] < rmax) res += rmax - height[right];

    height[left] > height[right] ? right-- : left++;
  }
  return res;
}
