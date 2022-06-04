/*
Problem Statement

Given a string, sort it based on the decreasing frequency of its characters

Example 1:
Input : "Programming"
Output : "rrggmmPiano"
Explanation : 'r','g','m' appeared twice, so they neet to appear before any other character. 

Example 2:
Input : "abcbab"
Output : "bbbaac"
Explanation : 'b' appeared three times, 'a' appeared twice , and 'c' appeared only once.
*/

/*
Input : String
Output : String
Constraints : only String....???
edge case: if String.length == 0 , return null. if String .length == 1, return 1.


DS : 반복문
ALGO : Array
Time :O(NlogN)
Space : O(N)
*/

//const input = "Programming";

const input = "abcbab";

const func = (inputArr) => {
  const arr = inputArr.split("");
  let mapArr = new Map();
  let returnArr = [];

  arr.forEach((c) => {
    if (mapArr.has(c)) {
      mapArr.set(c, mapArr.get(c) + 1);
    } else {
      mapArr.set(c, 1);
    }
  });
  const resultArr = [...mapArr.entries()];
  resultArr.sort((a, b) => b[1] - a[1]);
  console.log(resultArr);
  for (let i = 0; i < resultArr.length; i++) {
    for (let j = 0; j < resultArr[i][1]; j++) {
      returnArr.push(resultArr[i][0]);
    }
  }
  console.log(returnArr);
};

func(input);
