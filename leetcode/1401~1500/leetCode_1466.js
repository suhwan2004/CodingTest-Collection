/*
접근법
1. 나가는 adjlist, 들어오는 adjlist를 만든다.
2. 각각 채워넣어 준다.
3.seenNodes를 만든다.(지금까지 확인한 노드들)
4.dfs(0)을 한다.
5. 나가는 노드를 보면서 만약에 확인 안한거면 dfs를 더 깊게 진행. count++
6. 다음은 들어오는 노드들을 보는데 방문을 안 했다면 dfs를 더 깊게 진행. 여기서 카운트하지 않은 이유는 들어오는 것을 막을 이유는 없기 때문이다.
7.return count;


DS : adjlist, hashMap
ALGO : dfs
time : O(n)
space : O(n)


*/
var minReorder = function (n, connections) {
  const listOut = new Array(n); // space : O(n + n-1) => O(2n-1)
  const listIn = new Array(n); // space : O(n + n-1) => O(2n-1)
  let count = 0;
  for (let i = 0; i < n; i++) {
    // time : O(n)
    listOut[i] = [];
    listIn[i] = [];
  }
  for (let [s, e] of connections) {
    // time : O(n-1)
    listIn[e].push(s);
    listOut[s].push(e);
  }
  const seenNodes = {}; // space : O(n)

  function dfs(current) {
    // time : O(n)
    seenNodes[current] = true;
    for (let i = 0; i < listOut[current].length; i++) {
      // worst : 한번에 다 보는 경우 => O(1) * O(n-1)
      if (!seenNodes[listOut[current][i]]) {
        count++;
        dfs(listOut[current][i]);
      }
    }

    for (let i = 0; i < listIn[current].length; i++) {
      // 둘 다 중첩이 아니고, 위에서 한번에 다 됬다면 실행안됨.
      if (!seenNodes[listIn[current][i]]) {
        dfs(listIn[current][i]);
      }
    }
  }

  dfs(0);
  return count;
};
