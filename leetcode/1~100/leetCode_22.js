/*
Input : int(n => if you make 1 set. you have to use n pairs)
Output : String Array(all combinations...)
Constraints : 
 - 1 <= n <= 8
E : x

Optimal Solution
Time : O(4^N / √n )
Space : O(4^N / √n ), call Stack...
ALGO : dfs, backtracking
DS : Array
*/

var generateParenthesis = function (n) {
  let arr = [];

  dfs("(", 1, 0);
  return arr;
  function dfs(word, l, r) {
    if (l < r || l > n || r > n) return;
    if (word.length === n * 2) {
      arr.push(word);
      return;
    }

    dfs(`${word}(`, l + 1, r);
    dfs(`${word})`, l, r + 1);
  }
};
