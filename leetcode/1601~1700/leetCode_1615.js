/*
시간 : 5 : 4 ~ 5: 34
다리가 많은 도시 두개의 다리 갯수를 반환

input : 2st array (graph)
output : int(최대 다리 갯수)
contraints
 - 2 <= n <= 100
 - 0 <= roads.length <= n * (n - 1) / 2
 - roads[i].length == 2
 - 0 <= ai, bi <= n-1
 - ai != bi
 - Each pair of cities has at most one road connecting them.
edgecase : roads.length == 0 => return 0;

DS: HashMap
ALGO : for
*/
var maximalNetworkRank = function (n, roads) {
  let map = new Map();
  let max = 0;
  let visit = [];
  if (roads.length == 0) return 0; //edge case 다리가 아예 없음.

  //0,1 0,2 0,3 1,2 1,3 2,3
  for (let i = 0; i < roads.length; i++) {
    for (let j = 0; j < roads[i].length; j++) {
      if (!map.has(roads[i][j])) {
        visit.push(roads[i][j]);
        map.set(roads[i][j], [i]);
      } else {
        let arr = map.get(roads[i][j]);
        arr.push(i);
        map.set(roads[i][j], arr);
      }
    }
  }
  for (let i = 0; i < visit.length - 1; i++) {
    for (let j = i + 1; j < visit.length; j++) {
      let arr = map.get(visit[j]);
      let size = arr.length + map.get(visit[i]).length;
      for (let k = 0; k < map.get(visit[i]).length; k++) {
        if (arr.includes(map.get(visit[i])[k])) size--;
      }
      if (max < size) max = size;
    }
  }
  return max;
};
