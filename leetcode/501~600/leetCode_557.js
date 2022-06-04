var reverseWords = function (s) {
  let arr = [];
  let word = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      arr.push(word.split("").reverse().join("") + " ");
      word = "";
    } else {
      word = word + s[i];
    }
  }
  arr.push(word.split("").reverse().join(""));
  return arr.join("");
};
