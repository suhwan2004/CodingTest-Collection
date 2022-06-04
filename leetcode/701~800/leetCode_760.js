var anagramMappings = function (nums1, nums2) {
  let map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    !map.has(nums2[i]) ? map.set(nums2[i], [i]) : map.get(nums2[i]).push(i);
  }
  return nums1.map((cur) => map.get(cur).pop());
};
