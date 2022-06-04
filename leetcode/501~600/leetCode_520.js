/*
Time : O(N)
Space : O(1)
*/
var detectCapitalUse = function (word) {
  if (word.length === 1) return true;
  let firstChar = word.charCodeAt(0);
  let secondChar = word.charCodeAt(1);
  if (firstChar >= 97 && firstChar <= 122) {
    for (let i = 0; i < word.length; i++) {
      let curChar = word.charCodeAt(i);
      if (curChar < 97 || curChar > 122) return false;
    }
  } else {
    if (secondChar >= 97 && secondChar <= 122) {
      for (let i = 1; i < word.length; i++) {
        let curChar = word.charCodeAt(i);
        if (curChar < 97 || curChar > 122) return false;
      }
    } else {
      for (let i = 1; i < word.length; i++) {
        let curChar = word.charCodeAt(i);
        if (curChar >= 97 && curChar <= 122) return false;
      }
    }
  }
  return true;
};
