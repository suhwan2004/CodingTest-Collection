/*
Input : Integer Array(s), 1 <= s.length <= 10^5...
Output : Integer
Constraints : 하단 참조.
EdgeCase : s.length == 1 일 때 return 0;

DS : HashMap, Array
ALGO : for
Time : O(n)
Space : O(n)

내가 생각한 풀이법(나름 Optimal solution)

1. hashmap에 key는 나온 문자, value는 배열로 하여 그 배열에서 나온 위치를 넣어줌.
2. 이 hashmap이 다 완성 된 이후 [k,v]를 하나씩 보는 for문 생성
3. res값은 한 번 나온 가장 앞에 있는 문자의 위치를 저장하는것. 고로 v.length가 1이여야만 갱신됨.
4. 만약에 이 반복문이 끝나고도 res = Infinity라면 이건 한번도 안 바뀌었다는 뜻이고
   그렇다는 건, 이 문자열은 단일 문자는 없었다는 뜻이기에 return -1, 그게 아니면 return res.
*/
var firstUniqChar = function (s) {
  if (s.length == 1) return 0; //Edge case

  let map = new Map(); // Space : O(n)
  //1.해쉬맵을 만들었습니다!
  for (let i = 0; i < s.length; i++) {
    //Time : O(n)
    let arr;
    if (map.has(s[i])) {
      // 이미 발견했던 문자일때
      arr = map.get(s[i]);
      arr.push(i);
      map.set(s[i], arr);
    } else {
      // 처음 발견된 문자일 때
      map.set(s[i], [i]);
    }
  }

  //2. 만든 해쉬맵을 이용해서 가장 빠른 것을 구해보아요!
  let res = Infinity; // 가장 빠른 유니크 문자가 입력배열에 있는 위치.
  for (let [k, v] of map) {
    // Time : O(n)
    if (v.length === 1) {
      // 나온 갯수가 1인 것을 발견했을 때만 res를 갱신함.
      res = Math.min(res, v[0]);
    }
  }
  //3.아예 유니크한 것이 없는지 확인하며 리턴합니다!
  return res === Infinity ? -1 : res; // All 중복 검사 이후, -1 or 가장 빠른 위치 반환.
};
