/*
Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

*/

let words = ["quick", "brown", "the", "fox"];
let str = "thequickbrownfox";

function solution(words, str) {
  let set = new Set();
  for (let i = 0; i < words.length; i++) {
    set.add(words[i]);
  }
  let arr = [];
  let loc = 0;
  for (let i = 1; i <= str.length; i++) {
    if (set.has(str.substring(loc, i))) {
      arr.push(str.substring(loc, i));
      loc = i;
    }
  }
  return arr.length === words.length ? arr : null;
}

console.log(solution(words, str));
