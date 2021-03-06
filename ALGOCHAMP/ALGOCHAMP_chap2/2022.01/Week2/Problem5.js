/*
start : 12:10 ~ 12:55

Given a word, write a function to generate all of its unique generalized abbreviations.

A generalized abbreviation of a word can be generated by replacing each substring of the word with the count of characters in the substring. Take the example of “ab” which has four substrings: “”, “a”, “b”, and “ab”. After replacing these substrings in the actual word by the count of characters, we get all the generalized abbreviations: “ab”, “1b”, “a1”, and “2”.

Note: All contiguous characters should be considered one substring, e.g., we can’t take “a” and “b” as substrings to get “11”; since “a” and “b” are contiguous, we should consider them together as one substring to get an abbreviation “2”.


Example 1:

Input: "BAT"
Output: "BAT", "BA1", "B1T", "B2", "1AT", "1A1", "2T", "3"
Example 2:

Input: "code"
Output: "code", "cod1", "co1e", "co2", "c1de", "c1d1", "c2e", "c3", "1ode", "1od1", "1o1e", "1o2", 
"2de", "2d1", "3e", "4"

------------

모든 subset을 구하는데, input보다 길이가 작은 subset일 때는 원문과 비교해서 숫자를 채워넣으면 될 것 같음.

방법은 dfs + backtracking를 쓸 것임.

재귀와 반복문의 시간복잡도가 같기 때문에 시간은 같고, 공간의 경우 call stack이 있으므로 시간과 동일하다.

Time : O(N * 2^N)
Space : O(N * 2^N)
*/

// 2 => 4
// 3 => 8
// 4 => 16
//이걸로 알 수 있는 것은 arr.length === 2^n 이라는 것.
//그렇다면 저 아래의 반복문도 O(n*2^n)이 나온다는 것을 알 수 있다.
function solution(input) {
  input = input.split("");
  let arr = [];
  arr.push(`${input.length}`);
  dfs(new Array(input.length), 0);

  for (let i = 1; i < arr.length; i++) {
    let curWord = "",
      l = 0,
      r = 0;
    let count = 0;
    while (r < arr[i].length) {
      if (arr[i][r] == undefined) count++;
      else {
        if (count > 0) curWord += count + arr[i][r];
        else curWord += arr[i][r];
        count = 0;
        l = r;
      }
      r++;
    }
    if (count > 0) curWord += count;

    arr[i] = curWord;
  }

  return arr;

  //O(N*2^N)
  function dfs(word, position) {
    for (let i = position; i < input.length; i++) {
      let newArr = word.slice();
      newArr[i] = input[i];
      arr.push(newArr);
      dfs(newArr, i + 1);
    }
  }
}
console.log(solution("code"));
