const input = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];
const target = 33;
//time -> O(logN); -> O(nlogn)
//space -> O(1)
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    // overflow
    const mid = Math.floor(left + (right - left) / 2);
    console.log(mid);
    if (arr[mid] === target) return mid;
    else if (mid - 1 >= left && arr[mid - 1] == target) return mid - 1;
    else if (mid + 1 <= right && arr[mid + 1] == target) return mid + 1;
    if (Math.abs(arr[mid - 1] - target) > Math.abs(arr[mid + 1] - target))
      left = mid + 2;
    else right = mid - 2;
  }
  return -1;
};

console.log(binarySearch(input, target));
