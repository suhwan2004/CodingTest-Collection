/*
Write a function that, given a string, returns its longest palindromic substring.

A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

You can assume that there will only be one longest palindromic substring.


a b a x y z z y x f
v                  
    v

*/
const expandAroundCenter = (s, l, r) => {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return r - l - 1;
};

const longestPalindrome = (s) => {
  s = s.split("");
  if (s === null || s.length < 1) return "";
  let start = 0,
    end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - (len - 2) / 2;
      end = i + len / 2;
    }
  }
  return s.splice(start, end + 1 - start).join("");
};

console.log(longestPalindrome("abaxyzzyxf"));
