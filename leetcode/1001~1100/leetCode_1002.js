var commonChars = function (words) {
  let word = words[0];
  let result = [];
  let flag = 0;
  for (let i = 0; i < words.length; i++) {
    let map = new Map();
    for (let j = 0; j < words[i].length; j++) {
      if (map.has(words[i][j])) {
        map.set(words[i][j], map.get(words[i][j]) + 1);
      } else {
        map.set(words[i][j], 1);
      }
    }
    words[i] = map;
  }
  for (let i = 0; i < word.length; i++) {
    flag = 0;
    for (let j = 0; j < words.length; j++) {
      if (words[j].has(word[i]) && words[j].get(word[i]) > 0) {
        words[j].set(word[i], words[j].get(word[i]) - 1);
        flag = 1;
      } else {
        flag = 0;
        break;
      }
    }
    if (flag == 1) {
      result.push(word[i]);
    }
  }
  return result;
};
