/*
Input : String
Output : int(Longest Palindrome length that can be made with input string)
Constraints :
 - 1 <= s.length <= 2000
 - s consists of lowercase and/or uppercase English letters only.
Edge case : x
 */

/*
Optimal Solution

Time : O(N)
Space : O(1) => constant space
ALGO : for
DS : Array
*/

var longestPalindrome = function (s) {
  let flag = true,
    len = 0;
  let arr = new Array(52).fill(0);

  for (let i = 0; i < s.length; i++) {
    let curChar = s.charCodeAt(i);
    if (curChar >= 97) arr[curChar - 71]++;
    else arr[curChar - 65]++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) len += arr[i];
    else {
      if (flag) {
        flag = false;
        len += arr[i];
      } else {
        len += arr[i] - 1;
      }
    }
  }

  return len;
};
