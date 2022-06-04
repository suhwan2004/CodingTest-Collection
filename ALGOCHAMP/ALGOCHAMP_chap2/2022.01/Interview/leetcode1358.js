/*

https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

Given a string s consisting only of characters a, b and c.
Return the number of substrings containing at least one occurrence of all these characters a, b and c.


3 <= s.length <= 5 x 10^4
s only consists of a, b or c characters.

*/

/*
BrutheForce => 2 For, Time Limit Exceeded
O(N^2) , O(1)
공간의 경우 map밖에 없는데 key는 무조건 3개까지 될 수 있고 value는 int이기 때문에 세지 않음.
*/
var numberOfSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length - 2; i++) {
    let map = new Map();
    for (let j = i; j < s.length; j++) {
      if (map.has(s[j])) map.set(s[j], map.get(s[j]));
      else map.set(s[j], 1);
      if (map.get("a") > 0 && map.get("b") > 0 && map.get("c") > 0) count++;
    }
  }
  return count;
};

/*
Optimal Solution
Time : O(N)
Space : O(1)
*/

var numberOfSubstrings = function (s) {
  let res = 0;
  let a = 0,
    b = 0,
    c = 0;
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") a++;
    else if (s[i] === "b") b++;
    else c++;
    while (a > 0 && b > 0 && c > 0) {
      //여기는 무조건 1,1,1때 들어갈거고, res 연산도 한번밖에 안함. 그렇기 때문에 O(+N)
      res += s.length - i; // 지금 여기서 만들수 있는 조합은 이정도나 됨. 이걸 더해준다는 것이지요
      if (s[j] === "a") a--;
      else if (s[j] === "b") b--;
      else c--;
      j++;
    }
  }
  return res;
};

console.log(numberOfSubstrings("abcabc"));
