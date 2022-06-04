/*
Given a non-empty array of integers, write a function that returns the longest strictly-increasing subsequence in the array.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1,3,4] form a subsequence of the array [1,2,3,4], and so do the numbers [2,4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

You can assume that there will only be one longest increasing subsequence.
*/

/*

DS: array, map
ALGO : DP, for
Time : O(n^2) => n == array.length
space : O(map);
*/
array = [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35];
function solution(array) {
  let dp = [];

  if (array.length == 0 || array.length == 1) return array;
  for (let i = 0; i < array.length; i++) {
    dp[i] = 1;
  }

  let num = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j]) {
        num = 1;
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  if (num == 0) return [array[0]]; //다 1일 경우에는 그냥 첫번째 값을 배열에 넣고 반환.

  let map = new Map();
  for (let i = 0; i < dp.length; i++) {
    let arr;
    if (map.has(dp[i])) {
      arr = map.get(dp[i]);
      arr.push(i);
      map.set(dp[i], arr);
    } else map.set(dp[i], [i]);
  }

  let res = [];
  for (let i = 0; i < map.get(1).length; i++) {
    let arr = dfs([array[map.get(1)[i]]], 2, map.get(1)[i]);
    if (arr.length > res.length) res = arr;
  }

  function dfs(aa, loc, j) {
    if (!map.has(loc)) return aa;
    let bb = [];
    for (let i = 0; i < map.get(loc).length; i++) {
      if (aa[aa.length - 1] < array[map.get(loc)[i]] && map.get(loc)[i] > j) {
        aa.push(array[map.get(loc)[i]]);
        aa = dfs(aa, loc + 1, map.get(loc)[i]);
        if (aa.length > bb.length) bb = aa.slice();
        aa.pop();
      }
    }
    return aa > bb ? aa : bb;
  }
  return res;
}

console.log(solution(array));
