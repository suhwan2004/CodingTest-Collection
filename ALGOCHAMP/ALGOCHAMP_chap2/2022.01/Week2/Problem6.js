/*
There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task can have some prerequisite tasks which need to be completed before it can be scheduled. Given the number of tasks and a list of prerequisite pairs, find out if it is possible to schedule all the tasks.

Example 1:

Input: Tasks=3, Prerequisites=[0, 1], [1, 2]
Output: true
Explanation: To execute task '1', task '0' needs to finish first. Similarly, task '1' needs 
to finish before '2' can be scheduled. One possible scheduling of tasks is: [0, 1, 2] 
Example 2:

Input: Tasks=3, Prerequisites=[0, 1], [1, 2], [2, 0]
Output: false
Explanation: The tasks have a cyclic dependency, therefore they cannot be scheduled.
Example 3:

Input: Tasks=6, Prerequisites=[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]
Output: true
Explanation: A possible scheduling of tasks is: [0 1 4 3 2 5] 
*/

function solution(T, P) {
  let arr = new Array(T).fill(0);
  let flag = true;
  for (let [s, e] of P) {
    arr[e]++;
  }

  let queue = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) queue.push(i);
  }

  while (queue.length > 0) {
    let val = queue.shift(); // 이 강의를 들은 것이다.
    for (let [s, e] of P) {
      if (val === s) {
        arr[e]--;
        if (arr[e] === 0) queue.push(e);
      }
    }
  }
  for (let i of arr) {
    if (i > 0) flag = false;
  }
  return flag;
}

console.log(
  solution(3, [
    [0, 1],
    [1, 2],
  ])
);
