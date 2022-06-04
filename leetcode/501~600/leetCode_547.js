/*
start : 5 : 48 ~ 5 : 56

이 문제의 경우 선으로 연결된 것을 하나의 섬이라 생각하면 됨.
섬의 갯수를 구하는 것이 이문제의 요구사항임.

I : int 2d array
O : count of island
C : ...
E : x

DS : array
ALGO : dfs
Time : O(N)
Space : O(N)

그냥 간단하게 생각해서.
count를 만들고
dfs를 이용해서 최대로 갈 수 있는 섬까지 각 인덱스마다 이동한다.
여기서 추가연산을 줄이기 위해서 visited를 만들어서 dfs 내에서 해당 위치를 이동할 때 마다 visited를 수정해준다.
dfs가 끝나고 for에서 index가 다음 위치로 이동할 때 만약에 탐색했던 곳이라면 더 이상 dfs 연산을 하지 않을 것임. (memorization) gogo
*/
var findCircleNum = function (isConnected) {
  let visited = new Array(isConnected.length).fill(false);
  let count = 0;
  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      count++;
      dfs(i);
    }
  }
  return count;

  function dfs(cur) {
    visited[cur] = true;
    for (let i = 0; i < isConnected[cur].length; i++) {
      if (isConnected[cur][i] === 1 && !visited[i]) dfs(i);
    }
  }
};
