/*
Input : String(columnTitle)
Output : int(엑셀 시트에 맞게 변환된 숫자)
Contraints : 
 - 1 <= columnTitle.length <= 7
 - columnTitle consists only of uppercase English letters.
 - columnTitle is in the range ["A", "FXSHRXW"].
E : x
*/

/*
Time : O(N)
Space : O(1)
ALGO : for
DS : x
*/

var titleToNumber = function (columnTitle) {
  let baseNum = "A".charCodeAt(0);
  let resVal = 0;

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    let curVal = columnTitle.charCodeAt(i) - baseNum + 1;
    resVal += Math.pow(26, columnTitle.length - 1 - i) * curVal;
  }

  return resVal;
};
