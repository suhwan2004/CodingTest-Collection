var stringShift = function (s, shift) {
  let left = 0,
    right = 0;

  for (let [dir, amount] of shift) {
    if (dir === 0) left += amount;
    else right += amount;
  }

  if (left === right) return s;
  else if (left > right) {
    left = (left - right) % s.length;
    return s.substring(left) + s.substring(0, left);
  } else {
    right = (right - left) % s.length;
    return s.substring(s.length - right) + s.substring(0, s.length - right);
  }
};
