/*
1. Cycle In Graph

start : 2022.10.10 20:03 ~ 20:41


Input : edges(int 2d array)
Output : edges를 통한 그래프에서 Cycle이 나올 수 있는지
Constraints : edges.length > 0
Edge case : x
*/

/*
Bruth force

1.DFS를 통해 전체 모든 루트를 탐색한다.
2.탐색 중 중복경로가 발생할 수 있다. 기본적으로 이동 경로는 hash set으로 저장하고 있으며 그 것으로 구분한다.
3.출발지와 같은 노드가 있다면 바로 true를 반환한다.

Time : O(N^2)
Space :O(N^2)
ALGO : dfs
DS : graph, array
*/

function CycleInGraph(edges) {
  for (let i = 0; i < edges.length; i++) {
    let set = new Set();
    if (dfs(i, i, set)) return true;
  }

  return false;

  function dfs(start, curNode, set) {
    if (edges[curNode].length === 0) return false;
    for (let cur of edges[curNode]) {
      if (!set.has(cur)) {
        if (start === cur) return true;

        set.add(cur);
        if (dfs(start, cur, set)) return true;
        set.delete(cur);
      }
    }
  }
}

const edge = [[1, 3], [2, 3, 4], [0], [], [2, 5], []];
console.log(CycleInGraph(edge));

/*
Optimal Solution


Time :
Space :
ALGO :
DS :
*/
