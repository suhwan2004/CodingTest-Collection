function Main() {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  let cnt = 0;
  let caseNum = 0;
  let visited, map;

  while (true) {
    let [N, M] = input[cnt].split(" ").map((cur) => +cur);
    if (N === 0 && M === 0) break;

    caseNum++;
    cnt++;
    map = new Map();
    visited = new Set();

    // 그래프 만들기
    for (let i = 0; i < M; i++) {
      let [s, e] = input[cnt].split(" ").map((cur) => +cur);
      cnt++;
      if (map.has(s)) map.get(s).add(e);
      else map.set(s, new Set([e]));
      if (map.has(e)) map.get(e).add(s);
      else map.set(e, new Set([s]));
    }

    //현재 그래프에서의 트리 갯수를 저장할 변수
    let treeCnt = 0;

    // 노드 갯수가 하나 이상이여야 트리를 볼 것임
    if (N > 1) {
      for (let i = 1; i <= N; i++) {
        if (!visited.has(i)) {
          if (dfs(i, -1)) treeCnt++; // cycle이 없는 경우에만 treeCnt 증가
        }
      }
    }

    //트리의 갯수에 따라 다르게 출력해주기
    switch (treeCnt) {
      case 0:
        console.log(`Case ${caseNum}: No trees.`);
        break;
      case 1:
        console.log(`Case ${caseNum}: There is one tree.`);
        break;
      default:
        console.log(`Case ${caseNum}: A forest of ${treeCnt} trees.`);
        break;
    }
  }

  function dfs(node, parent) {
    visited.add(node);
    if (!map.has(node)) return true;
    for (let curNode of map.get(node)) {
      if (curNode === parent) continue; // 부모 노드는 제외
      if (visited.has(curNode)) return false; // cycle이 있음
      if (!dfs(curNode, node)) return false; // 자식 노드에 cycle이 있음
    }
    return true; // cycle이 없음
  }
}

Main();
