function solution(arr) {
  arr.sort((a, b) => a.length - b.length);
  let map = {};
  let path = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = 1;
    path[arr[i]] = null;
  }

  //O(n*arr[res])
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let str = arr[i].slice(0, j) + arr[i].slice(j + 1, arr[i].length);
      if (str in map) {
        let val = map[str] + 1;
        if (val > map[arr[i]]) {
          map[arr[i]] = val;
          path[arr[i]] = str;
        }
      }
    }
  }

  let num = map[arr[0]];
  let res = 0;
  for (let i = 1; i < arr.length; i++) {
    // O(n)
    let num1 = map[arr[i]];
    res = num > num1 ? res : i;
  }
  let resArr = [];
  let loc = arr[res];
  for (let i = res; i >= 0; i--) {
    // O(n)
    if (loc == arr[i]) {
      resArr.push(arr[i]);
      loc = path[loc];
    }
  }

  return resArr;
}

console.log(
  solution(["abde", "abc", "abd", "abcde", "ade", "ae", "labde", "abcdef"])
);
