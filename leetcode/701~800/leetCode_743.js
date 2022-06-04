/*
7:8 ~ 7:38   30   
input : Array of Int, Int, Int
Output : Int
C : 
1 <= k <= n <= 100
1 <= times.length <= 6000
times[i].length == 3
1 <= ui, vi <= n
ui != vi
0 <= wi <= 100
All the pairs (ui, vi) are unique. (i.e., no multiple edges.)
E :x


문제를 푸는 방법
k가 시작지 = > 0을 넣어줌, 나머지는 Infinity
[1, 0, 1, Infinity],3
[1,0,1,2]
*/
var networkDelayTime = function (times, n, k) {
  let arr = [];
  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (i === k - 1) arr[i] = 0;
    else arr[i] = Infinity;
  }

  for (let [u, v, w] of times) {
    let val;
    if (map.has(u - 1)) {
      val = map.get(u - 1);
      val.push([v - 1, w]);
      map.set(u - 1, val);
    } else map.set(u - 1, [[v - 1, w]]);
  }

  help(k - 1);
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    if (i == k - 1) continue;
    if (arr[i] === Infinity) {
      return -1;
    }
    max = Math.max(max, arr[i]);
  }
  return max;

  function help(current) {
    if (map.has(current)) {
      for (let [v, w] of map.get(current)) {
        if (arr[v] > w + arr[current]) {
          arr[v] = w + arr[current];
          help(v);
        }
      }
    } else return;
  }
};
