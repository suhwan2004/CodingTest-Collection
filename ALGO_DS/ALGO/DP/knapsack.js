/*
DS : array
ALGO : DP
time : O(M*N)
Space : O(M*N)
M === input.capacity, N === input.items.length
*/

let input = {
  capacity: 200,
  items: [
    [465, 100],
    [400, 85],
    [255, 55],
    [350, 45],
    [650, 130],
    [1000, 190],
    [455, 100],
    [100, 25],
    [1200, 190],
    [320, 65],
    [750, 100],
    [50, 45],
    [550, 65],
    [100, 50],
    [600, 70],
    [255, 40],
  ],
};

function knapsack(input) {
  if (input === {}) return []; //edge case!

  //create array => space : O(items * capacity), time : O(items * capacity)
  let arr = Array.from({ length: input.items.length + 1 }, () =>
    Array(input.capacity + 1).fill(0)
  );

  //knapsack algo => Time(items * capacity)
  for (let i = 1; i < arr.length; i++) {
    // Time : O(items * capacity)
    let val = input.items[i - 1][0];
    let weight = input.items[i - 1][1];

    for (let j = 1; j < arr[i].length; j++) {
      if (weight > j) arr[i][j] = arr[i - 1][j];
      //현재 무게가 지금 capacity가 감당불가.
      else {
        //감당이 될 때
        //바로 윗값과 (현재 보는 item의 value) + (현재 j에 item의 무게를 뺀 곳의 값)을 비교.
        arr[i][j] = Math.max(arr[i - 1][j - weight] + val, arr[i - 1][j]);
      }
    }
  }

  return [arr[arr.length - 1][arr[0].length - 1], findIdx(input, arr)];
}

function findIdx(input, arr) {
  let capacity = input.capacity;
  let res = []; // space : O(items.length);

  //time : O(items.length)
  //계단식으로 이해함., 0안봄
  for (let i = arr.length - 1; i >= 1; i--) {
    if (
      arr[i][capacity] < capacity ||
      arr[i][capacity] === arr[i - 1][capacity]
    ) {
      continue;
    }

    capacity -= input.items[i - 1][1];
    res.push(i - 1);

    if (capacity <= 0) break;
  }
  return res.reverse();
}

console.log(knapsack(input));
