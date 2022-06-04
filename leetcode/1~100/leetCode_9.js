/*

I : int value
O : boolean(Input int value is PalindromeNumber?)
C : 
 - -2^31 <= x <= 2^31 - 1
 - Follow up: Could you solve it without converting the integer to a string?
E : x
*/

/*
Bruth force(if you use String Method...)

Time : O(N/2) => O(N)
Space : O(N)
DS : String
ALGO : for
*/
var isPalindrome = function (x) {
  let flag = true;
  if (String(x).length == 1) return true;
  if (String(x)[0] == "-") return false;

  for (let i = 0; i < String(x).length / 2; i++) {
    if (String(x)[String(x).length - i - 1] != String(x)[i]) return false;
  }
  return true;
};

/*
Optimal Solution(Math) - this is not my solution...

Time : O(N)
Space : O(1)
DS : x
ALGO : for
*/

var isPalindromeOptimal = function (x) {
  if (x < 0) return false;

  let rev = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10)) rev = rev * 10 + (i % 10);
  return rev === x;
};
