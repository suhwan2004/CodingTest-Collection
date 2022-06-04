/*
start : 1:27 ~ 11 , 44분....
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:
Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.

I : int(target), int array(input)
O : target과 가장 근접한 3sum
C : 
1. input arr는 Sorting이 안 되어있음.
2. 3<=input.length<= 10000, -1000 <= input[i] <= 1000, -10^6<=target<= 10^6
3. triplet sum은 적어도 하나가 존재함.
E : if(input.length === 3) {
  let sum=0;
  for(let i of input){
    sum += i;
  }
  return sum;
}

DS : array
ALGO : two pointer, sort
Time :  O(N^2)
Space : O(N^2)

푸는 법
bruthe force => 둘 다 O(N^2)
sort(O(nlogn))
3Sum(O(n^2))
*/

function solution(input, target) {
  let min = -Infinity;

  if (input.length === 3) {
    let sum = 0;
    for (let i of input) sum += i;
    return sum;
  }

  input.sort((a, b) => a - b);

  for (let i = 0; i < input.length - 2; i++) {
    let l = i + 1,
      r = input.length - 1;

    while (l < r) {
      let sum = input[i] + input[l] + input[r];
      if (Math.abs(target - sum) < Math.abs(target - min)) min = sum;
      if (target - sum > 0) {
        let lVal = input[l];
        while (lVal === input[l]) {
          l++;
        }
      } else {
        let rVal = input[r];
        while (rVal === input[r]) {
          r--;
        }
      }
    }
  }
  return min;
}

console.log(solution([-2, 0, 1, 2], 2));

//l로 가면 값이 커짐. r로가면 값이 작아지는데...
// target - sum => 음수다. l++
// target - sum => 양수다. r--
//   v    v     v =>
// [-3,-2,-1, 0,1,2] target = 0
//   -3
