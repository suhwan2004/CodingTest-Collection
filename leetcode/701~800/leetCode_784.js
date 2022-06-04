/*
소문자 아스키 : 97 ~ 122
*/
var letterCasePermutation = function (s) {
  s = s.toLowerCase();
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let arr1 = [];
    if (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123) {
      arr1.push(s[i]);
      arr1.push(s[i].toUpperCase());
    } else {
      arr1.push(s[i]);
    }
    arr.push(arr1);
  }
  let res = [];
  for (let i = 0; i < arr[0].length; i++) {
    dfs(`${arr[0][i]}`, 1);
  }

  return res;

  function dfs(str, loc) {
    if (str.length === s.length) {
      res.push(str);
      return;
    }
    for (let i = 0; i < arr[loc].length; i++) {
      dfs(str + arr[loc][i], loc + 1);
    }
  }
};
