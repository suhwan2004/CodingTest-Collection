/*
11:15 ~ 11:50, 35분 ㅠㅠ....


I : int n
O : int value , 제곱수들을 가장 효율적으로 더해서 n이 나왔을 때, 더한 제곱수의 수.
C : 1 <= n <= 10^4, n은 1만까지....
E : if(n === 1) return 1;
*/

/*
DS : HashMap
ALGO : DFS
Time : O(M + N)
Space : O(N), N = HashMap...

solution....

n = 12

9를 할 수 있는데 ... 3 => 4
4를 할수 있는데 4+4+4+ => 3
1 => 13

n = 26

25 => 25, 1 => 2회
16 => 16, 9, 1 = > 3회
9 => 9, 9, 4, 4 => 4회
4 => 6회 +1= > 7

엄청 안좋은 방법이긴 하지만...
계산이 가능한 최대 제곱수를 구해보자.
요고를 기준으로 두고 제곱수를 한 단계씩 내려가면서 재귀를 돌아서 최적의 count를 구하면 될 것 같은데?
최솟값 갱신.
return 최솟값.
*/
var numSquares = function (n) {
  if (n === 1) return 1;

  let basic = 1;
  while (Math.pow(basic, 2) < n) {
    //O(M)
    basic++;
  }

  let map = new Map(); //O(N)

  if (Math.pow(basic, 2) === n) return 1;
  basic--;

  for (let i = basic; i >= 1; i--) {
    // O(M + N)
    dfs(i, Math.pow(i, 2), 1);
  }
  return map.get(n);

  function dfs(a, sum, count) {
    if (map.has(sum)) {
      if (map.get(sum) > count) map.set(sum, count);
      else return;
    } else map.set(sum, count);

    let minVal = Infinity;
    for (let i = a; i >= 1; i--) {
      let currentVal = sum + Math.pow(i, 2);
      if (currentVal <= n) {
        dfs(i, currentVal, count + 1);
      }
    }
  }
};
