var intervalIntersection = function (firstList, secondList) {
  let f1 = 0,
    s1 = 0;
  let res = [];

  while (f1 < firstList.length && s1 < secondList.length) {
    let maxStart = Math.max(firstList[f1][0], secondList[s1][0]);
    let minEnd = Math.min(firstList[f1][1], secondList[s1][1]);

    if (maxStart <= minEnd) res.push([maxStart, minEnd]);
    if (firstList[f1][1] < secondList[s1][1]) f1++;
    else s1++;
  }
  return res;
};
