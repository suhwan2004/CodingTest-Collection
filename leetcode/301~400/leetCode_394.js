var decodeString = function (s) {
  let k = "",
    curStr = "";
  let prevStack = [],
    kStack = [];
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      k += s[i];
    } else if (s[i] === "[") {
      kStack.push(k);
      prevStack.push(curStr);
      k = "";
      curStr = "";
    } else if (s[i] === "]") {
      let prev = prevStack.pop();
      let curK = kStack.pop();
      curStr = prev + curStr.repeat(curK);
    } else {
      curStr += s[i];
    }
  }
  return curStr;
};
