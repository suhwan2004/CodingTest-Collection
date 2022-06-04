/*
8:00 ~ 8:30 x 못풀었음.
a 가 b에 속하면
ab, ba

asdfg = > 엄청 많은 단어가 나올 예정...

Input : 2 String
Output : boolean
C : 
1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
E : 

DS : 
ALGO : 슬라이딩 윈도우
Time : O(N)
Space : 


abc
babc
해결법


s1을 map으로 만듬.  b:1 a:1 c:1 d:1   => 1.만약에 map에 없는 것을 봤을때 정상적으로 map 내에 없지 않으면 map을 for 한번을 돌아야 됨.
              => 값이 0이되면 map에서 제거하기
         
새로만든 맵 => 3 : 'b',

eidbaceooo
    
       
return true or false => 맵의 길이가 1이라도 남아있으면 false
*/
var checkInclusion = function (s1, s2) {
  let l = 0,
    r = 0;
  let map = new Map();
  for (let i = 0; i < s1.length; i++) {
    if (map.has(s1[i])) map.set(s1[i], map.get(s1[i]) + 1);
    else map.set(s1[i], 1);
  }
  while (r < s2.length && map.size !== 0) {
    if (!map.has(s2[r])) {
      //더 이상 넣을 게 없다.
      if (l == r) {
        if (!map.has(s2[l])) {
          l++;
          r++;
        }
      } else {
        //l을 앞으로 가면서, 그 전에 있던 것을 다시 map에 넣어줌.
        if (map.has(s2[l])) map.set(s2[l], map.get(s2[l]) + 1);
        else map.set(s2[l], 1);
        l++;
      }
    } else {
      //r이 더 갈 기회가 있다.
      if (map.get(s2[r]) == 1) map.delete(s2[r]);
      else map.set(s2[r], map.get(s2[r]) - 1);
      r++;
    }
  }
  return map.size == 0 ? true : false;
};
