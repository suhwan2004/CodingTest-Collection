/*
Input : int 2d Array(intervals) 
Output : int( the minimum number of conference rooms required)
Contraints : 
 - 1 <= intervals.length <= 104
 - 0 <= starti < endi <= 106
E : if (!intervals || intervals.length < 1) return 0; 
*/

/*
Time : O(NLogN)
Space : O(N)
ALGO : Sort, two pointer
DS : Array, hashMap
*/

var minMeetingRooms = function (intervals) {
  if (!intervals || intervals.length < 1) {
    return 0;
  }
  let rooms = 0;
  let end = 0;
  const starts = intervals.map((a) => a[0]).sort((a, b) => a - b);
  const ends = intervals.map((a) => a[1]).sort((a, b) => a - b);
  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[end]) {
      rooms++;
    } else {
      end++;
    }
  }
  return rooms;
};
