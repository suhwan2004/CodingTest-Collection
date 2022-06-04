/*
Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.
A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

간단하게 요약하면, a,e,i,o,u로 문자열을 만드는데 이걸 사전 순서대로 정렬하라는 뜻.
또한, e에서 스타트를 끊는다면 ea이렇게 역으로 나오면 안됨.

Input : n === str.length
Output : count of maked strs
C : 1 <= n <= 50
E : x
*/

/*
Bruth force solution

Time : n^5
Space : n => call stack...
ALGO : x
DS : dfs, backtracking

*/

var countVowelStrings = function (n) {
  let count = 0;
  dfs(0, 0);
  return count;

  function dfs(cur, loc) {
    if (cur === n) {
      count++;
      return;
    }

    for (let i = loc; i < 5; i++) {
      dfs(cur + 1, i);
    }
  }
};

/*
Optimal Solution

Time : O(N)
Space : O(N)
ALGO : dfs, memo, dp
DS : x
*/
function solution2() {
  let dp = Array(5).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < 5; j++) {
      dp[j] = dp[j] + dp[j - 1];
    }
  }
  return dp[4];
}

/*
Math Solution
*/
var countVowelStringsOptimal = function (n) {
  return ((n + 4) * (n + 3) * (n + 2) * (n + 1)) / 24;
};

console.log(countVowelStrings(1));
console.log(countVowelStrings(3));
console.log(countVowelStrings(33));
