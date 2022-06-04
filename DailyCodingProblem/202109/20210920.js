/*
Good morning! Here's your coding interview problem for today.

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

결론적으로 보면, 배열이 주어지고, 특정 숫자 k가 주어지는데 배열 안에 있는 두 가지 값을 더해서 k가 만들어지냐임.

*/

//solution : sort, two pointer
const solution = (arr, k) => {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum == k) return true;
    else if (sum > k) right--;
    else left++;
  }
  return false;
};

console.log(solution([10, 15, 3, 7], 17));
