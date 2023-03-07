/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */

/*
 start : 2023/03/07 20:39 ~ 21:35

Input : int[] time, int totalTrips
Output : least Trip time
Constraints :
 - 1 <= time.length <= 105
 - 1 <= time[i], totalTrips <= 107
Edge case : x

Solution
Time : O(NlogN), N = 10^7
Space : O(N)
Algo : Binary Search, for
DS : hashMap, array
 */
var minimumTime = function (time, totalTrips) {
  let l = 0,
    r = Infinity;
  let map = new Map();
  let minTime = Infinity;
  for (let i = 0; i < time.length; i++) {
    r = Math.min(r, time[i]);
    map.set(time[i], (map.get(time[i]) || 0) + 1);
  }

  r *= totalTrips;
  let last = r;

  while (l < r) {
    let mid = Math.floor(l + (r - l) / 2);
    let curTrips = makeTripSum(mid, map);

    if (curTrips >= totalTrips) {
      minTime = Math.min(mid, minTime);
      r = mid - 1;
    } else if (curTrips < totalTrips) {
      l = mid + 1;
    }
  }

  if (l >= r) {
    curTrips = makeTripSum(r, map);
    if (curTrips >= totalTrips) {
      minTime = Math.min(r, minTime);
    }
  }

  return minTime == Infinity ? last : minTime;
};

function makeTripSum(mid, map) {
  let sum = 0;
  for (let [k, v] of map) {
    sum += Math.floor(mid / k) * v;
  }
  return sum;
}
