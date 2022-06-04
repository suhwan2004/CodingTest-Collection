/*
Input : int 2d Array(intervals)
Output : boolean( if a person could attend all meetings.)
Contraints : 
 - 0 <= intervals.length <= 10^4
 - intervals[i].length == 2
 - 0 <= starti < endi <= 10^6
E : x
*/

/*
Time : O(NlogN)
Space : O(1)
ALGO : Sort, for
DS : Array
*/

var canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    if (i === 0) continue;
    if (
      intervals[i - 1][0] === intervals[i][0] ||
      intervals[i - 1][1] > intervals[i][0]
    )
      return false;
  }
  return true;
};
