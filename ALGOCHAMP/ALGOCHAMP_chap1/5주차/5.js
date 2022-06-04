/*
딱히 어떤 알고리즘 사용없이 for과 if만으로 만든 방식임.
시간복잡도의 경우 저렇게 나온 이유는 무조건 한번 numbers.length;만큼 돌면서 answer을 채워야 하기에 n이 들어가며,
if else if 문을 사용해서 지금 numbers[i]가 어디에 있는지 확인 후 그에 따라 keyPad[0].length 만큼 한차례 돌기에 m을 곱함.

공간복잡도의 경우 keyPad 2st Array가 가장 크기 때문에 이 것을 공간복잡도로 지정했음.

시간복잡도 :O(numbers.lenght *keyPad[0].length) => O(n*m);
공간복잡도 :O(2stArray)
*/

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";

function solution(numbers, hand) {
  var answer = "";
  let left_pointer = [0, 3];
  let right_pointer = [2, 3];

  let keyPad = [
    [1, 4, 7, "*"],
    [2, 5, 8, 0],
    [3, 6, 9, "#"],
  ];

  for (let i = 0; i < numbers.length; i++) {
    // numbers.length 만큼 loop
    if (numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7) {
      //console.log("왼쪽");
      // numbers[i]가 keyPad의 왼 쪽에 있을 때.
      for (let k = 0; k < keyPad[0].length; k++) {
        if (numbers[i] == keyPad[0][k]) {
          left_pointer = [0, k];
          answer += "L";
        }
      }
      continue;
    } else if (numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9) {
      //console.log("오른쪽");
      // numbers[i]가 keyPad의 오른 쪽에 있을 때.
      for (let k = 0; k < keyPad[2].length; k++) {
        if (numbers[i] == keyPad[2][k]) {
          right_pointer = [2, k];
          answer += "R";
        }
      }
      continue;
    } else {
      // 가운데 값일 때...
      //console.log("가운데");
      let key = [];
      for (let k = 0; k < keyPad[1].length; k++) {
        if (numbers[i] == keyPad[1][k]) {
          key = [1, k];
        }
      }
      let left_dis =
        Math.abs(key[1] - left_pointer[1]) + Math.abs(key[0] - left_pointer[0]);
      let right_dis =
        Math.abs(key[1] - right_pointer[1]) +
        Math.abs(key[0] - right_pointer[0]);

      if (left_dis < right_dis) {
        answer += "L";
        left_pointer = key;
      } else if (right_dis < left_dis) {
        answer += "R";
        right_pointer = key;
      } else {
        // 둘이 같을 때.
        if (hand == "right") {
          answer += "R";
          right_pointer = key;
        } else {
          answer += "L";
          left_pointer = key;
        }
      }
      continue;
    }
  }
  return answer;
}

console.log(solution(numbers, hand));
