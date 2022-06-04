var employeeFreeTime = function (schedule) {
  let arr = [];
  let res = [];
  for (let i = 0; i < schedule.length; i++) {
    for (let j = 0; j < schedule[i].length; j++) {
      arr.push([schedule[i][j].start, schedule[i][j].end]);
    }
  }
  arr.sort((a, b) => a[0] - b[0]);

  let curVal = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    if (curVal < arr[i][0]) {
      res.push([curVal, arr[i][0]]);
    }
    curVal = Math.max(arr[i][1], curVal);
  }

  for (let i = 0; i < res.length; i++) {
    res[i] = { start: res[i][0], end: res[i][1] };
  }
  return res;
};
