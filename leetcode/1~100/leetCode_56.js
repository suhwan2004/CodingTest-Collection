/*
Input : int 2d Array(intervals)
Output : int 2d Array(Merge intervals...)
Contraints :
 - 1 <= intervals.length <= 104
 - intervals[i].length == 2
 - 0 <= starti <= endi <= 104 
E : x

Solution

Time : O(NLogN)
Space : O(N);
ALGO : Sort, for
DS : Array
*/

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let last = res[res.length - 1];
    if (last[1] === intervals[i][0])
      res[res.length - 1] = [last[0], intervals[i][1]];
    else if (last[1] > intervals[i][0]) {
      if (intervals[i][1] >= last[1]) res[res.length - 1][1] = intervals[i][1];
    } else res.push(intervals[i]);
  }
  return res;
};
