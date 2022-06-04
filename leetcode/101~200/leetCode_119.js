/*
Input : int(rowIndex)
Output : int Array(pascal's Triangle row of rowIndex)
Contraints : 
 - 0 <= rowIndex <= 33
 - Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
E : if (rowIndex <= 1) return new Array(rowIndex + 1).fill(1);
*/

/*
Time : O(k^2)
Space : O(k)
ALGO : DP, for
DS : Array
*/
var getRow = function (rowIndex) {
  let arr = [1, 1];
  if (rowIndex <= 1) return new Array(rowIndex + 1).fill(1);

  for (let i = 2; i <= rowIndex; i++) {
    let newArr = [1];
    for (let j = 0; j < arr.length - 1; j++) {
      newArr.push(arr[j] + arr[j + 1]);
    }
    newArr.push(1);
    arr = newArr;
  }
  return arr;
};
