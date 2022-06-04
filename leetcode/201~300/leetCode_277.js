/*
Input : int(n), function(knows)
Output : int(celebrity)
Contraints :
 - n == graph.length == graph[i].length
 - 2 <= n <= 100
 - graph[i][j] is 0 or 1.
 - graph[i][i] == 1
 - Follow up: If the maximum number of allowed calls to the API knows is 3 * n, could you find a solution without exceeding the maximum number of calls? 
E : x 
*/

/*
Bruth Force
Time : O(N^2 * knows)
Space : O(1)
ALGO : for
DS : x
*/

var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
    for (let i = 0; i < n; i++) {
      let flag = true;
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        if (knows(i, j) || !knows(j, i)) flag = false;
      }
      if (flag) return i;
    }
    return -1;
  };
};

/*
Optimal Solution
Time : O(N * knows)
Space : O(1)
ALGO : for
DS : O(1)
*/
var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
    let candidate = 0;

    for (let i = 0; i < n; i++) {
      if (candidate == i) continue;
      if (knows(candidate, i)) {
        candidate = i;
      }
    }

    for (let i = 0; i < n; i++) {
      if (candidate == i) continue;
      if (knows(candidate, i) || !knows(i, candidate)) {
        return -1;
      }
    }
    return candidate;
  };
};
