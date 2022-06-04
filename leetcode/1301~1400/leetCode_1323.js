var maximum69Number = function (num) {
  let max = -Infinity;
  let arr = String(num).split("");
  for (let i = 0; i < arr.length; i++) {
    let arr1 = arr.slice();
    let val;
    if (arr1[i] == "6") {
      arr1[i] = "9";
      max = Math.max(max, parseInt(arr1.join("")));
    }
  }
  return max == -Infinity ? num : max;
};
