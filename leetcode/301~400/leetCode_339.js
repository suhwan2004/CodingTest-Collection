var depthSum = function (nestedList) {
  let sum = 0;
  for (let i = 0; i < nestedList.length; i++) {
    if (nestedList[i].isInteger()) sum += nestedList[i].getInteger();
    else dfs(nestedList[i].getList(), 2);
  }
  return sum;

  function dfs(cur, dep) {
    for (let i = 0; i < cur.length; i++) {
      if (cur[i].isInteger()) sum += cur[i].getInteger() * dep;
      else dfs(cur[i].getList(), dep + 1);
    }
  }
};
