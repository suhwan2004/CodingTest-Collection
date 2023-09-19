function solution(players, callings) {
  const map = new Map();
  const map1 = new Map();
  const resultArr = [];

  players.forEach((cur, idx) => {
    map.set(cur, idx);
    map1.set(idx, cur);
  });

  callings.forEach((cur) => {
    const curRank = map.get(cur);
    const curRankName = map1.get(curRank);
    const upRank = curRank - 1;
    const upRankName = map1.get(upRank);
    map1.set(curRank, upRankName);
    map1.set(upRank, curRankName);
    map.set(upRankName, curRank);
    map.set(curRankName, upRank);
  });

  for (let i = 0; i < players.length; i++) {
    resultArr[i] = map1.get(i);
  }

  return resultArr;
}
