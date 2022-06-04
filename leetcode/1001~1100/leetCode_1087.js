var expand = function (s) {
  let arr = [],
    flag = false,
    subArr = [],
    res = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{") flag = true;
    else if (s[i] === "}") {
      flag = false;
      subArr.sort();
      arr.push(subArr.slice());
      subArr = [];
    } else if (s[i] === ",") continue;
    else {
      flag ? subArr.push(s[i]) : arr.push(s[i]);
    }
  }
  if (subArr.length > 0) arr.push(subArr);

  dfs(0, "");
  return res;

  function dfs(idx, word) {
    if (word.length === arr.length) {
      res.push(word);
      return;
    }
    if (arr[idx].length === 1) {
      dfs(idx + 1, word + arr[idx]);
    } else {
      for (let i = 0; i < arr[idx].length; i++) {
        dfs(idx + 1, word + arr[idx][i]);
      }
    }
  }
};
