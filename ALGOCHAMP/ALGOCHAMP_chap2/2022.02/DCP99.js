/*
정렬되지 않은 정수 배열이 주어지면 가장 긴 연속 요소 시퀀스의 길이를 찾습니다.

예를 들어, 주어진 [100, 4, 200, 1, 3, 2] , 가장 긴 연속 요소 시퀀스는 [1, 2, 3, 4] 입니다. 길이를 반환합니다. 4 .

알고리즘은 O(n) 복잡성에서 실행되어야 합니다.
*/

/*
Bruth Force
Using Sort
Time : O(NlogN)
Space : O(1);
*/

/*
Optimal Solution
Time :O(N)
Space :O(N)
*/

function Optimal(nums) {
  let maxLen = 0;
  let map = new Map();

  //l값은 시퀸스가 시작이 되는 범위를 가리킬 것임. 그리고, r 값은 본인 값 or 자신이 포함된 시퀸스의 가장 큰 값을 가리킬 것임.
  for (let i of nums) {
    if (map.has(i)) continue;
    let l = i,
      r = i;
    //전값이 존재하는가? => 존재한다면 전 값의 첫번째 인덱스 값 가져옴
    if (map.has(i - 1)) l = map.get(i - 1)[0];
    //다음 값이 존재하는가? => 존재한다면 다음 값의 두 번째 인덱스 값을 가져옴.
    if (map.has(i + 1)) r = map.get(i + 1)[1];

    map.set(i, [l, r]);
    map.set(l, [l, r]);
    map.set(r, [l, r]);
    maxLen = Math.max(r - l + 1, maxLen);
  }
  console.log(map);
  return maxLen;
}

console.log(Optimal([100, 4, 200, 1, 3, 2]));
