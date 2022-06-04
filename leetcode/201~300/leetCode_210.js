/*
Input : int(num), int Array(pre)
Output : int Array(the ordering of courses you should take to finish all courses.)
Contraints : 
 - 1 <= numCourses <= 2000
 - 0 <= prerequisites.length <= numCourses * (numCourses - 1)
 - prerequisites[i].length == 2
 - 0 <= ai, bi < numCourses
 - ai != bi
 - All the pairs [ai, bi] are distinct.
E : x
*/

/*
Optimal Solution
Time : O((V+E)^2), BFS + Shift_func
Space : O(V+E)
*/

var findOrder = function (num, pre) {
  let arr = new Array(num).fill(0);
  for (let [k] of pre) {
    arr[k] += 1;
  }
  let queue = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) queue.push(i);
  }

  let res = [];
  while (queue.length > 0) {
    let val = queue.shift();
    res.push(val);
    for (let [a, b] of pre) {
      if (b === val) {
        arr[a]--;
        if (arr[a] === 0) queue.push(a);
      }
    }
  }
  return res.length === num ? res : [];
};
