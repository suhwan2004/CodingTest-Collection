/*
MergeSort
Time : O(NlogN)
Space : O(N)
*/

function MergeSort(input) {
  if (input.length <= 1) return input;

  let pivot = Math.floor(input.length / 2);
  let leftList = MergeSort(input.slice(0, pivot));
  let rightList = MergeSort(input.slice(pivot, input.length));

  return merge(leftList, rightList);
}

function merge(left, right) {
  let res = [];
  let leftP = 0,
    rightP = 0;

  while (leftP < left.length && rightP < right.length) {
    if (left[leftP] < right[rightP]) res.push(left[leftP++]);
    else res.push(right[rightP++]);
  }

  return res.concat(
    leftP === left.length
      ? right.slice(rightP, right.length)
      : left.slice(leftP, left.length)
  );
}

console.log(MergeSort([5, 2, 3, 1]));
