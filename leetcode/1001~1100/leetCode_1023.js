var camelMatch = function (queries, pattern) {
  let arr = [];
  for (let query of queries) {
    let match = 0;
    let flag = true;
    for (let x of query) {
      if (pattern[match] === x) {
        match++;
      } else if (x === x.toUpperCase()) {
        flag = false;
        break;
      }
    }

    arr.push(flag && match === pattern.length);
  }

  return arr;
};
