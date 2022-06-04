/*
This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

function solution(str) {
  let input = ["arrow", "apple", "dog", "deer", "deal"];
  let res = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].substring(0, str.length) === str) res.push(input[i]);
  }
  return res;
}

console.log(solution("de"));
