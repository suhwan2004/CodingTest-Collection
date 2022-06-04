/*
Given an array of numbers which is sorted in ascending order and is rotated ‘k’ times around a pivot, find ‘k’.
You can assume that the array does not have any duplicates.

Start : 11:34 ~ 12:18, 44분...ㅠ 
*/
/*
지금 당장 생각나는건 이진 탐색.
말 그대로 , 이 문제의 경우 특정 입력 배열에서 사이클을 돌리고, 그걸 몇번 했는지 찾는 것임.
그렇다면, 가장 작은 값의 index를 반환해주면 그게 정답임. 왜? 오름차순 정렬했다고 했으니깐.

DS : array
ALGO : Binary Search
Time : O(logn)
Space : O(1)
*/

function solution(nums) {
  if (nums.length === 0 || nums.length === 1) return nums.length; // edge case
  let l = 0,
    r = nums.length - 1;
  let mid;
  let res = [-1, Infinity]; //그냥 최솟값. 이 문제를 최솟값 구하기로 생각했어요. => 정신없이 풀음....
  while (l <= r) {
    mid = Math.floor(l + (r - l) / 2);

    if (nums[mid] < res[1]) {
      res = [mid, nums[mid]]; //현재 가지고 있는 최소 예상값보다 mid가 작으면 갱신.
    }

    if (nums[l] < nums[r]) {
      //좌보다 우가 크다. 정방향 흐름.그럼 오른쪽 줄이기.
      r = mid - 1;
    } else {
      //왼쪽이 오른쪽보다 크거나 같은 경우.

      //오른쪽이 가운데보다 큰 경우.
      //5,1,2,3,4 이런 경우
      if (nums[mid] < nums[r]) r = mid - 1;
      //가운데가 오른쪽보다 크거나 같은 경우
      //3,4,5,1,2 이런 경우
      else l = mid + 1;
    }
  }

  //결과적으론 가장 작은 값이 나오게 됨.
  return res[0];
}

console.log(solution([4, 5, 7, 9, 10, -1, 2]));
console.log(solution([10, 15, 1, 3, 8]));
