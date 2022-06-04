/*
Given a string and a pattern, find all anagrams of the pattern in the given string.

Every anagram is a permutation of a string. As we know,
when we are not allowed to repeat characters while finding permutations of a string, 
we get N!N! permutations (or anagrams) of a string having NN characters.
For example, here are the six anagrams of the string “abc”:

abc
acb
bac
bca
cab
cba

Write a function to return a list of starting indices of the anagrams of the pattern in the given string.


----------

Start : 11:32 ~ 12:08 , 36분 걸림... 살짝 코드 꼬여서 더 걸린듯.

I : 1-String(string), pattern(string)
O : Index to make pattern(int array)
C : string.length, pattern.length > 0 , character is only lowercase
E :

DS : Array
ALGO : for
Time : O(N), N === str.length
Space : O(1)

*/

const Solution = (str, pattern) => {
  let result = [];
  let pArr = new Array(26).fill(0);
  let strArr = new Array(26).fill(0);

  for (let i = 0; i < pattern.length; i++) {
    pArr[pattern.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < pattern.length - 1; i++) {
    strArr[str.charCodeAt(i) - 97]++;
  }
  let loc = 0;

  for (let i = pattern.length - 1; i < str.length; i++) {
    strArr[str.charCodeAt(i) - 97]++;
    let flag = true;
    for (let k = 0; k < pArr.length; k++) {
      if (pArr[k] !== strArr[k]) {
        flag = false;
        break;
      }
    }
    if (flag) result.push(loc);
    strArr[str.charCodeAt(loc) - 97]--;
    loc++;
  }

  return result;
};

console.log(Solution("ppqp", "pq"));
console.log(Solution("abbcabc", "abc"));
