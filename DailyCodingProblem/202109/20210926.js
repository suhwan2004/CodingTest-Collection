/*
Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/

function solution(num) {
  let count = 0;
  let loc = 1;
  while (parseInt(num.substring(0, loc)) <= 26 && loc <= 2) {
    dfs([parseInt(num.substring(0, loc))], loc);
    loc++;
  }
  function dfs(current, loc) {
    if (current.join("").length == num.length) {
      console.log(current);
      count++;
      return;
    }
    let i = loc + 1;
    while (
      parseInt(num.substring(loc, i)) <= 26 &&
      i - loc <= 2 &&
      i < num.length + 1
    ) {
      current.push(parseInt(num.substring(loc, i)));
      dfs(current, i);
      current.pop();
      i++;
    }
  }
  return count;
}

console.log(solution("112366"));
