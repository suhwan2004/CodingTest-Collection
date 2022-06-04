/*
Given a string, find the palindrome that can be made by inserting the fewest number of characters as possible anywhere in the word. If there is more than one palindrome of minimum length that can be made, return the lexicographically earliest one (the first one alphabetically).

For example, given the string "race", you should return "ecarace", since we can add three letters to it (which is the smallest amount to make a palindrome). There are seven other palindromes that can be made from "race" by adding three letters, but "ecarace" comes first alphabetically.

As another example, given the string "google", you should return "elgoogle".
*/

function solution(str) {
  let reverseStr = str.split("").reverse().join(""); // Space : O(N)
  let p = reverseStr.length - 1;
  let len = str.length;
  let word = "!"; // Space worst case : O(2N) => O(N)
  while (p >= 0) {
    //Time : O(N)
    let word1 = "$";
    if (reverseStr.substring(p, len) === str.substring(0, len - p))
      word1 =
        reverseStr.substring(0, p) +
        reverseStr.substring(p, len - 1) +
        str.substring(len - p - 1, len);
    if (word1 !== "$") {
      if (word === "!") word = word1;
      else word = word.length > word1.length ? word1 : word;
    }
    p--;
  }
  return word === "!" ? "" : word;
}
console.log(solution("race"));
