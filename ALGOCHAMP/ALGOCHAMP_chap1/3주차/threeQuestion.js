/*
input : arr
output : int
constraints : 무조건 그 전에 넣은 값이랑 간격이 있어야 됨.
edge case : arr.length == 0  return 0;

DS: array
ALGO: dp
Time: O(n)
Space: O(n)
*/
// v        v             v
const array = [75, 105, 120, 75, 90, 135];

const solution = (arr) => {
  if (arr.length == 0) {
    return 0;
  }
  let dp = [];
  dp[0] = arr[0];
  dp[1] = Math.max(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    console.log(dp);
    console.log("------------");
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
  }
  console.log(dp);
  return dp[dp.length - 1];
};

console.log(solution(array));
