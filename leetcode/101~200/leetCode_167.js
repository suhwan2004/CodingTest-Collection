/*
Input : int Array(numbers), int(target)
Output : int Array(numbers)
Contraints : 
 - 2 <= numbers.length <= 3 * 10^4
 - -1000 <= numbers[i] <= 1000
 - numbers is sorted in non-decreasing order.
 - -1000 <= target <= 1000
 - The tests are generated such that there is exactly one solution.
 - Your solution must use only constant extra space.
E : x
*/

/*
Time : O(Log N)
Space : O(1)
ALGO : Binary Search, for
DS : Array
*/

var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] == target) return [left + 1, right + 1];
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else if (numbers[left] + numbers[right] < target) {
      left++;
    }
    continue;
  }
};
