var reverseOnlyLetters = function (s) {
  let res = [];
  let arr = [];
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let reverse = s.charCodeAt(s.length - 1 - i);
    let char = s.charCodeAt(i);
    if (char > 122 || char < 65 || (char > 90 && char < 97)) map.set(i, s[i]);
    if ((reverse <= 122 && reverse >= 97) || (reverse >= 65 && reverse <= 90))
      arr.push(s[s.length - 1 - i]);
  }
  let count = 0;
  while (count != s.length + map.size) {
    if (map.has(count)) {
      res.push(map.get(count));
    } else {
      let val = arr[0];
      arr.shift();
      res.push(val);
    }
    count++;
    continue;
  }
  return res.join("");
};
