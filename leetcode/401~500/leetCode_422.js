var validWordSquare = function (words) {
  let len = words.length;
  for (let i = 0; i < len; i++) {
    let wordLen = words[i].length;
    for (let j = 0; j < wordLen; j++) {
      if (!words[j] || words[i][j] !== words[j][i]) return false;
    }
  }
  return true;
};
