/*가장 긴 피크의 길이를 구하는 문제임
피크란? 값이 올라갔다가 내려가는 것을 말함.
*/

array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];

let max = 0;

function solution(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let stat = "up";
    let loc = i;
    let val = 1;
    while (loc != array.length - 1) {
      if (loc < array.length && array[loc + 1] > array[loc]) {
        if (stat == "up") {
          val++;
          loc++;
        } else break;
        continue;
      }
      if (loc < array.length && array[loc + 1] < array[loc]) {
        if (stat == "up") {
          loc++;
          val++;
          stat = "down";
        } else {
          loc++;
          val++;
        }
        continue;
      }
      if (loc < array.length && array[loc + 1] == array[loc]) break;
    }
    if (stat == "down") max = Math.max(val, max);
  }
  return max;
}

console.log(solution(array));
