/*
input : integer
output : n을 나눌때 나머지가 1이되는 가장 작은 자연수.
Constraints : 3 ≤ n ≤ 1,000,000
Edge Case : x
*/

/*
Bruth force 
time : O(N)
Space : O(1)
Algo : for
Space : x
*/
function solution(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 1) return i;
  }
}
