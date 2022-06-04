/*
10 : 04 ~ 10 :34
종료시간 10 : 23

Input : int array
output : int array
Contraints : 2 <= asteroids.length <= 104 , -1000 <= asteroids[i] <= 1000 , asteroids[i] != 0
edge case : x

DS : array
ALGO : for
time : O(N) 
space : O(N)

  1.왼쪽이 양수고, 오른쪽이 음수여야지만 싸울 수 있다.
  2. 
     1.왼쪽의 절대값이 더 쌤.   => 이미 들어가 있는 왼쪽 유지하고 그냥 continue
     2. 오른쪽이 더 쌤.  => 이미 들어가 있던 왼쪽 폭파. 폭파된 위치의 전 값도 확인.
     3.둘 다 비슷함.  => 왼쪽 없에고 바로 continue.
     
   3. 결과 배열을 return.
  
*/

var asteroidCollision = function (asteroids) {
  let a = []; // 값을 넣어주는 용도 죠..

  for (let i = 0; i < asteroids.length; i++) {
    if (a.length > 0) {
      let b = a[a.length - 1];
      let c = asteroids[i];
      if (b > 0 && c < 0) {
        if (Math.abs(b) > Math.abs(c)) continue;
        else if (Math.abs(b) < Math.abs(c)) {
          a.pop(); //마지막꺼 지워버리기
          i--;
          continue;
        } else if (Math.abs(b) == Math.abs(c)) {
          a.pop();
          continue;
        }
      }
    }
    a.push(asteroids[i]);
  }

  return a;
};
