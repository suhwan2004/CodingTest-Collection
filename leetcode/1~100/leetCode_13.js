/*
10:20 ~ 10:50 => 딱 30분!

1. 키보드에서 손을 떼고! 인터뷰 스탑.
   => 1. 인터뷰를 받아준 사람이 푼 코드를 바로 그냥 보기.
   => 2. 제가 한번 이건 풀어볼께요.
    => 직접 코드를 다시 풀어보고 코드를 인터뷰를 한사람과 공유하기!
2. 아 저 진짜 풀 수 있어요 => 몇 분 더 풀어보기.


I : String. 1 <= s.length <= 15, s는 무조건 예시에 명시된 로마 문자만 사용함.
O : Integer
C :
1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
Edge case : s.length === 1 => 바로 나올것 같음.

1. 나는 일단 알고리즘이나 DS를 잘모른다. for이랑 배열을 이용해서 풀거야.... => 브루트 포스
2. 나는 생각을 좀 하면서 굴려봐야될 것 같은데? Optiomal도 가능할듯? => 옵티멀까지 같이 진행.
3. 나는 이 문제가 쉬워서 바로 효율적인 코드를 짤 수 있을 것 같은데? => 바로 옵티멀로 이동.

브루트 포스

DS : Array
ALGO : for
Time : O(7n) 
Space : O(1);


edge case => 여기서 길이가 1이면 걸러짐

1.저어기 밑에있는 반복문 안에 if elseif 문을 계속 써서 그 안에서 현재 위치의 로마문자를 숫자로 바꿔주는 것.

2. 처음부터 배열에다가 [['I', 1], ['V', 5]...];


let array = [['I', 1], ['V', 5]...]; // 공간복잡도 : O(7) => O(1)
let sum = 0;
for(i){
    let cur = s[i];
    let next = s[i+1];
    for(0 ~ array){ // 7번만 돌기. O(1)
        돌면서... 찾기. 그리고 cur의 값을 변경.
        돌면서... next에 맞는거 찾기, 그리고 next의 값 변경
    }
    cur = 숫자
    next = 숫자
    if(cur < next){
        sum += next - cur;
    }else{
        sum += cur;
    }
    return sum;
}

3. Hash map , object 옵티멀 솔루션
DS : HashMap
ALGO : for
Time : O(n) 
Space : O(1);
{I : 1, V : 5} // O(1) 



DS : HashMap
ALGO : for
Time : O(n) 
Space : O(1);




*/
var romanToInt = function (s) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  if (s.length === 1) return obj[s[0]];
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let cur = obj[s[i]];
    let next = obj[s[i + 1]] == undefined ? -Infinity : obj[s[i + 1]];

    if (cur < next) {
      sum += next - cur;
      i++;
    } else {
      sum += cur;
    }
  }
  return sum;
};
