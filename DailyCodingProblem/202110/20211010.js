/*
Given an array of time intervals (start, end) for classroom lectures (possibly overlapping),
 find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
*/

function solution(input) {
  let counter = Array.from({ length: 1400 }, () => 0);
  for (let i of input) {
    counter[i[0]] += 1;
    counter[i[1]] -= 1;
  }
  let room = 0;
  let tmp = 0;
  console.log(counter);
  for (let i of counter) {
    tmp += i;
    if (tmp > room) {
      room = tmp;
    }
  }
  return room;
}
console.log(
  solution([
    [30, 75],
    [0, 50],
    [60, 150],
  ])
);
