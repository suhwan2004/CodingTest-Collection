/*
The Westfield Mall management is trying to figure out what the busiest moment at the mall was last year. You're given data extracted from the mall's door detectors. Each data point represented as an integer array whose size is 3. The values at indices 0, 1 and 2 are the timestamp, the count of visitors, and whether the visitors entered or exted the mall (0 for exit and 1 for entrance), respectively. Here's an example of a data point : [ 1440084737, 4 , 0].

Note the time is given in a Unix format called Epoch, which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.

Given an arary, data, of data points, write a function findBusisestPeriod that returns the time at which the mall reached its busiest moment last year. The return value is the timestamp, e.g, 1480640292. Note that if there is more than one period with the same visitor peak, return the earliest one.

Assume that the array data is sorted in n ascending order by the timestamp. Explain your solution and analyze its time and space complexities.


*/

const data = [
  [1487799425, 14, 1],
  [1487799425, 4, 0],
  [1487799425, 2, 0],
  [1487800378, 10, 1],
  [1487801478, 18, 0],
  [1487801478, 18, 1],
  [1487901013, 1, 0],
  [1487901211, 7, 1],
  [1487901211, 7, 0],
];

const findBusisestPeriod = (data) => {
  let map = new Map();
  if (data.length == 1) return data[i][0];

  for (let i = 0; i < data.length; i++) {
    if (map.has(data[i][0])) {
      if (data[i][2] == 0)
        map.set(data[i][0], map.get(data[i][0]) - data[i][1]);
      else map.set(data[i][0], map.get(data[i][0]) + data[i][1]);
    } else {
      if (data[i][2] == 0) map.set(data[i][0], -data[i][1]);
      else map.set(data[i][0], data[i][1]);
    }
  }
  let max;
  let count = 0;
  for (let i of map) {
    if (count == 0) max = i;
    else {
      if (i[1] > max[1]) max = i;
      else if (i[1] == max[1] && i[0] < max[0]) {
        max = i;
      }
    }
    count++;
  }
  return max[0];
};

console.log(findBusisestPeriod(data));
