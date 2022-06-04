/*
Input : int Array(nums)
Output : int(각 차수의 값끼리 계속 더함 -> 일의 자릿수가 될 때까지 해서 나온 값)
Contraints : 
 - 0 <= num <= 2^31 - 1
E : if (num === 0) return 0;
*/

/*
Bruth force
Time : O(N^2)
Space : O(N)
ALGO : for
DS : x
*/

var addDigits = function (num) {
  if (num === 0) return 0;
  num = String(num);
  while (num.length !== 1) {
    num = num.split("");
    let cur = 0;
    for (let i = 0; i < num.length; i++) {
      cur += Number(num[i]);
    }
    num = String(cur);
  }
  return Number(num);
};
