/*
Time : O(N)
Space : O(1)
*/
var arraysIntersection = function (arr1, arr2, arr3) {
  const res = [];

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
    const num1 = arr1[p1];
    const num2 = arr2[p2];
    const num3 = arr3[p3];

    if (num1 < num2 || num1 < num3) p1++;
    else if (num2 < num1 || num2 < num3) p2++;
    else if (num3 < num1 || num3 < num2) p3++;
    else {
      res.push(num1);
      p1++, p2++, p3++;
    }
  }

  return res;
};
