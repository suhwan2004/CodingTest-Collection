/*
time : O(NlogN)
Space : O(N)
*/
var reorganizeString = function (S) {
  let map = new Map(); // key(문자) : value(횟수)인 hashmap
  for (let c of S) {
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);
  }

  let sort = []; // key인 알파벳을 저장하는 배열
  for (let [k, v] of map) {
    sort.push(k);
  }
  sort.sort((a, b) => map.get(b) - map.get(a)); // 횟수가 큰 것부터 앞에 나열.

  let res = [];
  let index = 0;

  for (let i = 0; i < sort.length; i++) {
    let current = map.get(sort[i]);
    if (current > Math.floor((S.length + 1) / 2)) return "";
    for (let j = 0; j < current; j++) {
      if (index >= S.length) index = 1;
      res[index] = sort[i];
      index += 2;
    }
  }
  return res.join("");
};
