var backspaceCompare = function (s, t) {
  let count = 0,
    count1 = 0;
  let p1 = 0,
    p2 = 0;
  let cur1 = "",
    cur2 = "";
  s = s.split("").reverse().join("");
  t = t.split("").reverse().join("");

  while (p1 < s.length || p2 < t.length) {
    [cur1, p1, count] = check(s, p1, count);
    [cur2, p2, count] = check(t, p2, count1);
    if (cur1 !== cur2) return false;
    p1++, p2++;
  }
  if (cur1 === cur2) return true;
  else return false;
};

function check(arr, p, count) {
  if (p >= arr.length) return ["", arr.length, count];
  if (count === 0 && arr[p] !== "#") return [arr[p], p, count];
  else {
    while (count !== -1) {
      if (p === arr.length) return ["", arr.length, count];
      if (arr[p] === "#") count++;
      else count--;
      if (count !== -1) p++;
    }
    return [arr[p], p, 0];
  }
}
