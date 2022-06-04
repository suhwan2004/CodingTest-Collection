/*
Input : String Array(s)
Output : String Array(reverse s)
Contraints : 
 - 1 <= s.length <= 10^5
 - s[i] is an English letter (uppercase or lowercase), digit, or space ' '.
 - There is at least one word in s.
 - s does not contain leading or trailing spaces.
 - All the words in s are guaranteed to be separated by a single space.
E : x
*/

/*
Time : O(N)
Space : O(1)
ALGO : for
DS : x
*/

var reverseWords = function (s) {
  s.reverse();
  let f = 0,
    e = 0;

  while (e < s.length) {
    if (s[e] === " ") {
      for (let i = 0; i < Math.floor((e - f) / 2); i++) {
        [s[f + i], s[e - i - 1]] = [s[e - i - 1], s[f + i]];
      }
      e++;
      f = e;
    } else e++;
  }
  for (let i = 0; i < Math.floor((e - f) / 2); i++) {
    [s[f + i], s[e - i - 1]] = [s[e - i - 1], s[f + i]];
  }
};
