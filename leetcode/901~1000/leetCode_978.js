var maxTurbulenceSize = function (arr) {
  if (arr.length == 1) return arr.length;
  let last = 0;
  let val = 0;
  let max = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    let current;
    if (arr[i] - arr[i - 1] > 0) current = "up";
    else if (arr[i] - arr[i - 1] < 0) current = "down";
    else current = "equal";

    if (last == 0) {
      if (current == "equal") {
        val = 1;
        continue;
      }
      last = current;
      val = 2;
    } else {
      if (last == current || current == "equal") {
        max = Math.max(max, val);
        if (current == "equal") val = 1;
        else val = 2;
        last = current;
      } else if (last != current) {
        val++;
        last = current;
      }
    }
  }

  return val > max ? val : max;
};
