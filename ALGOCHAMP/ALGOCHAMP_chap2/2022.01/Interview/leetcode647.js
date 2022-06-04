/*
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

문자열 s가 주어지면 그 안에 있는 회문 부분 문자열의 수를 반환합니다.
문자열은 앞뒤로 똑같이 읽을 때 회문입니다. 하위 문자열은 문자열 내에서 연속적인 문자 시퀀스입니다.
*/

//Bruthe Force => Time : O(2N^3 => N^3), Space : O(N)
var countSubstringsBruthe = function (s) {
  if (s.length === 1) return 1; // edge case
  let count = 0;

  //O(N)
  for (let i = 0; i < s.length; i++) {
    let point = i + 1;
    //O(N)
    while (point <= s.length) {
      //O(N), O(N)
      let str = s.substring(i, point++),
        l = 0,
        r = str.length - 1;
      let flag = true;
      //O(N)
      while (l < r) {
        if (str[l++] !== str[r--]) {
          flag = false;
          break;
        }
      }
      if (flag) count++;
    }
  }

  return count;
};

//Optimal Solution
//Time : O(1/2*N^2 => N^2), Space : O(1)
var countSubstringsOptimal = function (s) {
  if (s.length === 1) return 1; // edge case
  let result = 0;

  function check(l, r) {
    let count = 0;
    //O(1/2 * N)
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      //O(N)
      count++;
      l--;
      r++;
    }
    return palindromeCount;
  }

  for (let i = 0; i < s.length; i++) {
    //O(N)
    result += check(i, i);
    result += check(i, i + 1);
  }
  return result;
};
