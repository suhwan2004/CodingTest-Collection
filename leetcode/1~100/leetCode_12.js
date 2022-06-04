/*

#Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Input : int(one Number)
Output : String(roman Number)
C : 1 <= num <= 3999
E : x

Solution
Time : O(N) or O(1), N === Max(1 ~ 3999)
Space : O(1)
DS : Array
ALGO : for
*/

var intToRoman = function (num) {
  let dict = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let res = "";
  for (var [scale, val] of dict) {
    while (num >= scale) {
      res += val;
      num -= scale;
    }
    if (num <= 0) {
      break;
    }
  }
  return res;
};
