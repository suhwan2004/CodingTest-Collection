/*
Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

k종류를 가진 가장 긴 substring을 찾아라.
*/

function solution(k, s) {
  let maxStr = "";
  for (let i = 0; i < s.length - 1; i++) {
    let set = new Set();
    let str = "";
    for (let j = i; j < s.length; j++) {
      set.add(s[j]);
      if (set.size > 2) break;
      str += `${s[j]}`;
    }
    maxStr = maxStr.length > str.length ? maxStr : str;
  }
  return maxStr;
}
console.log(solution(2, "abcba"));
