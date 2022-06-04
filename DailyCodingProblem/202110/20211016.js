/*
Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
*/

/*
조건
1. 좌괄호가 없을 때 우괄호가 나온다면 바로 false
2. 모든 for을 마친 이후 우괄호가 남아있다면 true
*/

let input = "([])[]({})";

function solution(input) {
  input = input.split("");
  let map = new Map();
  let arr = [")", "}", "]"];
  let arr1 = ["(", "{", "["];
  let flag;

  for (let i = 0; i < input.length; i++) {
    flag = true;
    for (let j = 0; j < arr.length; j++) {
      if (input[i] === arr[j]) {
        flag = false;
        if (map.has(arr1[j]) && map.get(arr1[j]) > 0)
          map.set(arr1[j], map.get(arr1[j]) - 1);
        else return false;
      }
    }
    if (flag) {
      if (map.has(input[i])) map.set(input[i], map.get(input[i]) + 1);
      else map.set(input[i], 1);
    }
  }
  for (let [k, v] of map) if (v > 0) return false; //검증.
  return true;
}

console.log(solution(input));
