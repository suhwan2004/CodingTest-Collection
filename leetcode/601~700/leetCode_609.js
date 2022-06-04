var findDuplicate = function (paths) {
  for (let i = 0; i < paths.length; i++) {
    paths[i] = paths[i].split(" ");
  }
  let str = "";
  let obj = {};
  let count = 0;
  let resArr = [];
  for (let i = 0; i < paths.length; i++) {
    for (let j = 0; j < paths[i].length; j++) {
      if (j == 0) continue;
      str = "";
      count = 0;
      for (let k = 0; k < paths[i][j].length; k++) {
        if (paths[i][j][k] == ")") {
          break;
        }
        if (paths[i][j][k - 1] == "(") {
          str += paths[i][j][k];
          count = k - 1;
        } else if (str.length > 0) {
          str += paths[i][j][k];
        }
      }
      if (!obj[str]) {
        obj[str] = [];
        obj[str].push(paths[i][0] + "/" + paths[i][j].substring(0, count));
      } else {
        obj[str].push(paths[i][0] + "/" + paths[i][j].substring(0, count));
      }
    }
  }
  for (let k of Object.keys(obj)) {
    if (obj[[k]].length < 2) {
      continue;
    }
    resArr.push(obj[k]);
  }
  return resArr;
};
