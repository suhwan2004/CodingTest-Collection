var confusingNumber = function (n) {
  let str = String(n);
  //let inValidArr = ['2','3','4','5','7'];
  let res = "";
  let map = new Map();
  map.set("0", "0");
  map.set("1", "1");
  map.set("6", "9");
  map.set("8", "8");
  map.set("9", "6");
  for (let i = str.length - 1; i >= 0; i--) {
    if (map.has(str[i])) {
      res += map.get(str[i]);
    } else return false;
  }
  return Number(res) !== n ? true : false;
};
