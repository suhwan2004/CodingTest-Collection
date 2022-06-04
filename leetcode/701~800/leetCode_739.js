/*[73,74,75,71,69,72,76,73]
[[75,2],[71,3],[69,4],[72,5]] => shift javascript => O(N)
76
res[]
currentPoint - i => res[i] 
[0,0,0,0,0,0,0]


brute force : O(N^2) => 아마 시간초과
 말이 투포인터지 이거 쓰면 O(N^2)
 
Optimal solution : 

*/
var dailyTemperatures = function (temperatures) {
  if (temperatures.length === 1) return [0];

  let stack = [];
  let res = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0) {
      if (stack[stack.length - 1][0] < temperatures[i]) {
        res[stack[stack.length - 1][1]] = i - stack[stack.length - 1][1];
        stack.pop();
      } else {
        break;
      }
    }
    stack.push([temperatures[i], i]);
  }
  return res;
};
