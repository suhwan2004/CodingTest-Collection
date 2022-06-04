var calculateTime = function (keyboard, word) {
  let map = new Map();
  for (let i = 0; i < keyboard.length; i++) {
    map.set(keyboard[i], i);
  }
  let position = 0;
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum += Math.abs(map.get(word[i]) - position);
    position = map.get(word[i]);
  }
  return sum;
};
