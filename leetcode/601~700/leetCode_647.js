var countSubstrings = function (s) {
  if (s.length === 1) return 1; // edge case
  let result = 0;

  const checkPalindrome = (l, r) => {
    let palindromeCount = 0;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      //O(N)
      palindromeCount++;
      l--;
      r++;
    }
    return palindromeCount;
  };

  for (let i = 0; i < s.length; i++) {
    //O(N)
    result += checkPalindrome(i, i);
    result += checkPalindrome(i, i + 1);
  }
  return result;
};
