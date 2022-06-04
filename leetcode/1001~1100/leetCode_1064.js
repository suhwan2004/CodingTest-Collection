var fixedPoint = function (arr) {
  let left = 0,
    right = arr.length - 1,
    ans = -1,
    mid;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (arr[mid] >= mid) {
      right = mid - 1;
      if (arr[mid] === mid) {
        ans = mid;
      }
    } else {
      left = mid + 1;
    }
  }
  return ans;
};
