/*
input : 소문자로 이뤄진 문자열
output : 같은 소문자 2개씩을 쌍을 맺어 제거할 때, 모든 문자열이 다 소거가 될 수 있는가?
Constraints : 
- input.length <= 1,000,000
- input is just small letter
Edge Case : ?
*/

/*
Bruth force

Solution
1. dfs를 해야됨. dfs 1회 차마다, 문자열을 한번 씩 다 보고 그 안에서 제거할 수 있는 문자 쌍을 찾아서 제거.
2. 만약에, 모든 문자쌍을 다 제거했을 때, 문자가 하나라도 남아있다면 0을 반환하고 전 회차로 돌아가서 더 측정.
3. 최종적으로 단 한번이라도 다 제거가 된다면 재귀를 멈추고 1 반환.

result : runtime Error
입력 케이스의 경우 1,000,000개가 존재하는데, 현재의 경우 최악에는 2^500000임.
여기서 알 수 있는 것은, 적어도 O(N)에 유사한 시간복잡도에 접근해야됨.

Time : O(2^n)
Space : O(2^n)
ALGO : DFS
DS : string
*/
function bruthForce(s) {
  if (s.length === 0) return 1;
  if (s.length === 1 || s.length === 3) return 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      const val = solution(s.slice(0, i - 1) + s.slice(i + 1, s.length));
      if (val === 1) return 1;
    }
  }
  return 0;
}

/*
Optimal Solution
Time : O(N)
Space : O(N)
ALGO : for
DS : array, stack
*/
function solution(s) {
  if (s.length % 2) return 0;

  let arr = [];
  let i = 0;

  while (i !== s.length) {
    if (arr.length > 0 && arr[arr.length - 1] === s[i]) {
      arr.pop();
      i++;
      continue;
    }
    if (arr.length > s.length - i) return 0;
    arr.push(s[i++]);
  }

  return arr.length === 0 ? 1 : 0;
}
