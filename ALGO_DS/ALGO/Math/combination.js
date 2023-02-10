/*
조합은, 순서가 상관이 없으나, 중복이 되면 안되는 숫자의 묶음이다.
*/

// 조합의 수를 구하는 함수
function combinationCount(n, k) {
  if (n === k || k === 0) return 1;
  return combinationCount(n - 1, k) + combinationCount(n - 1, k - 1);
}
//console.log(combinationCount(5, 2));

//실제 조합을 구하는 함수
function combination(data, k) {
  const arr = [];
  dfs([], -1, 0);

  return arr;

  function dfs(curArr, prev, dep) {
    if (dep === k) {
      arr.push([...curArr]);
      return;
    }
    for (let i = prev + 1; i < data.length; ++i) {
      curArr.push(data[i]);
      dfs(curArr, i, dep + 1);
      curArr.pop();
    }
  }
}

console.log(combination([1, 2, 3, 4, 5, 6, 7], 2));
