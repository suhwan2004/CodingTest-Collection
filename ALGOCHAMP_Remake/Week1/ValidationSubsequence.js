/*
2. Validation Subsequence
start : 2022.10.10 21:34 ~ 21:41

Input : 2 array(int array)
output : is Validate Subsequence?
Constraints : ?
Edge Case : x
*/

/*
Optimal Solution
array를 한 바퀴 돌면서 sequence를 지워나간다.
Time : O(N)
Space : O(1)
ALGO : For
DS : array
*/

function ValidationSubsequence(array, sequence) {
  let count = 0;
  for (let cur of array) {
    if (cur === sequence[count]) count++;
    if (count === sequence.length) return true;
  }
  return false;
}

console.log(
  ValidationSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
);
