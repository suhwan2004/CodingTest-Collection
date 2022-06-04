/*
Input : int(numCourses), int 2d Array(pre)
Output : boolean(Can you finish all courses?)
Contraints : 
 - 1 <= numCourses <= 2000
 - 0 <= prerequisites.length <= 5000
 - prerequisites[i].length == 2
 - 0 <= ai, bi < numCourses
 - All the pairs prerequisites[i] are unique.
E : x
*/

/*

Time : O((E+V)^2), => BFS + shift_func , 다른 언어에서 구현 시 O(E+V)
Space : O(E+V)
ALGO : BFS, for
DS : Array
*/

var canFinish = function (numCourses, pre) {
  let arr = new Array(numCourses).fill(0);
  let flag = true;
  for (let [e, s] of pre) {
    arr[e]++;
  }
  let queue = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) queue.push(i);
  }

  while (queue.length > 0) {
    let val = queue.shift(); // 이 강의를 들은 것이다.
    for (let [e, s] of pre) {
      if (val === s) {
        arr[e]--;
        if (arr[e] === 0) queue.push(e);
      }
    }
  }

  //return true or false
  for (let i of arr) {
    if (i > 0) flag = false;
  }
  return flag;
};
