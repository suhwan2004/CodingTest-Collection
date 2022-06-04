var shortestWay = function (source, target) {
  let point = 0;
  let count = 0;
  let flag = false;
  let falseCount = 0;
  for (let i = 0; i < target.length; i++) {
    for (let j = point; j < source.length; j++) {
      if (source[j] === target[i]) {
        point = j + 1;
        if (point === source.length) {
          point = 0;
          count++;
        }
        flag = true;
        break;
      }
    }
    if (flag === false) {
      if (falseCount === 0) {
        i--;
        point = 0;
        count++;
        falseCount++;
      } else {
        return -1;
      }
    } else {
      if (falseCount === 1) falseCount = 0;
      flag = false;
    }
  }
  return point === 0 ? count : count + 1;
};
