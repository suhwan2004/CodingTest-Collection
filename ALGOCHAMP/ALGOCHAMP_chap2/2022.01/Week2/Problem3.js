/*

Start : 10:04 ~ 10:33 ,29

Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.


Example 1:
Input: [3, -1, 4, 5, 5], k=3
Output: [1, 2, 6]
Explanation: The smallest missing positive numbers are 1, 2 and 6.
Example 2:

Input: [2, 3, 4], k=3
Output: [1, 5, 6]
Explanation: The smallest missing positive numbers are 1, 5 and 6.
Example 3:

Input: [-2, -3, 4], k=2
Output: [1, 2]
Explanation: The smallest missing positive numbers are 1 and 2.

--------

Input : int array, k(int, 중간에 텀이 비어있는 반환해야될 숫자들의 갯수)
Output : int array(k개의 텀이 비어있던 숫자들)
C : 0<=input.length<=10000, 0<=k<input.length, -10000 <= input[i] <= 10000
E : if(k === 0) return [];

DS : Array
ALGO : for, while
Time : O(N) ( input.length === max of input[i])
Space : O(N)


---------------
[3, -1, 4, 5, 5]
브루트 포스로 푸는 법
sort를 시킨다?
[-1,3,4,5,5]
for(0 ~ input.length-1) => 1이상이 되는 수가 나올때 까지 그냥 아예 continue;
k가 얼마나 남아 있나.

int arr = [];
int res = []; => return할 배열
for(0 ~ input.lengh-1){
  if(input[i] > 0) arr[input[i]]++;
}

for(arr 배열){
  if(k === res.length) return res;
  if(arr[index] === undefined) res.push(arr[index]);
}

if(k > res.length){
  while(){
    if(k === res.length) return res;
    res.push(lastIndex)
    lastIndex++;
  }
}

*/

function Solution(input, k) {
  if (k === 0) return []; //Edge case
  let arr = []; // O(N)
  let res = []; //=> return할 배열 O(K) => O(N)
  //O(N), N === input.length
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      if (arr[input[i]] == undefined) {
        arr[input[i]] = 1;
      } else if (input[i] > 0) {
        arr[input[i]] += 1;
      }
    }
  }

  //O(M), M === Max of input element
  for (let i = 1; i < arr.length; i++) {
    if (k === res.length) return res;
    if (arr[i] === undefined) res.push(i);
  }

  let lastIdx = arr.length;
  if (k > res.length) {
    //O(K)
    while (1) {
      if (k === res.length) return res;
      res.push(lastIdx);
      lastIdx++;
    }
  }
}

console.log(Solution([3, -1, 4, 5, 5], 3));
console.log(Solution([2, 3, 4], 3));
console.log(Solution([-2, -3, 4], 2));
console.log(Solution([1, 4, 5, 7, 2, 1], 0));
