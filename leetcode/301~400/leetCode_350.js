var intersect = function (nums1, nums2) {
  let map = new Map();
  let win = nums1.length > nums2.length ? nums1 : nums2;
  let lose = nums1.length > nums2.length ? nums2 : nums1;

  for (let i = 0; i < lose.length; i++) {
    if (map.has(lose[i])) map.set(lose[i], map.get(lose[i]) + 1);
    else map.set(lose[i], 1);
  }
  let res = [];
  for (let i = 0; i < win.length; i++) {
    if (map.has(win[i]) && map.get(win[i]) > 0) {
      map.set(win[i], map.get(win[i]) - 1);
      res.push(win[i]);
    }
  }
  return res;
};
