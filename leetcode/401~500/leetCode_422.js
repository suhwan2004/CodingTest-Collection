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

//아래는 2023.03.07일자 풀이

/*
start : 2023-03-07 21 : 43 ~ 21 : 58
*/
var validWordSquare = function (words) {
  let rowLen = words.length;
  let colLen = rowLen;

  words.forEach((word) => {
    colLen = Math.max(word.length, colLen);
  });

  if (rowLen != colLen) return false;
  if (rowLen === 1 && colLen === 1) return true;

  for (let i = 0; i < rowLen - 1; i++) {
    for (let j = i + 1; j < rowLen; j++) {
      if (words[i][j] != words[j][i]) return false;
    }
  }

  return true;
};
