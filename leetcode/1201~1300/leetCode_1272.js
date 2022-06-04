var removeInterval = function (arr, remove) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] < remove[0] || remove[1] < arr[i][0]) res.push(arr[i]);
    else if (arr[i][0] > remove[0] && arr[i][1] < remove[1]) continue;
    else if (arr[i][0] < remove[0] && remove[1] < arr[i][1])
      res.push([arr[i][0], remove[0]], [remove[1], arr[i][1]]);
    else if (arr[i][0] < remove[0] && arr[i][1] < remove[1])
      res.push([arr[i][0], remove[0]]);
    else if (arr[i][0] < remove[1] && remove[1] < arr[i][1])
      res.push([remove[1], arr[i][1]]);
  }
  return res;
};
