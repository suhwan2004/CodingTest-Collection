/*
Time : O(N)
Space : O(N), Call_Stack, map.size, res...
ALGO : dfs
DS : HashMap
*/
var killProcess = function (pid, ppid, kill) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < pid.length; i++) {
    if (!map.has(pid[i])) map.set(pid[i], []);
    if (!map.has(ppid[i])) {
      if (ppid[i] === 0) continue;
      map.set(ppid[i], [pid[i]]);
    } else map.get(ppid[i]).push(pid[i]);
  }
  dfs(kill);
  return [kill, ...res];
  function dfs(cur) {
    if (!map.has(cur)) return;
    let getArr = map.get(cur);
    for (let i = 0; i < getArr.length; i++) {
      res.push(getArr[i]);
      dfs(getArr[i]);
    }
  }
};
