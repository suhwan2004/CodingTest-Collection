function solution(input) {
  if (input.length === 1) return false;
  input = input.split("");

  let flag = false;

  dfs(input, 0);

  return flag;

  function dfs(curArr, round) {
    if (flag) {
      return;
    }
    let cur_flag = false;
    for (let i = 0; i < curArr.length - 1; i++) {
      let arr;
      if (curArr[i] === "+" && curArr[i + 1] === "+") {
        cur_flag = true;
        arr = curArr.slice();
        arr[i] = "-";
        arr[i + 1] = "-";
        dfs(arr, round + 1);
      }
    }
    if (!cur_flag && round % 2 === 1) {
      flag = true;
    }
  }
}
//+++++++++ = 0 시작 안한거
//--+++++++ = 1, player1이 한것. player2가 이걸 받음.
//--+--++++ = 2, player2가 한거. player1이 받음.
//--+--+--+ = 3, player1이 한것. player2가 받음... 이김.

console.log(solution("+++++++++++----+-+-+++--++--+----+++"));
