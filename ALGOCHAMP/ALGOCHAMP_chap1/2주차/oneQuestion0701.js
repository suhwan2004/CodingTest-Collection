/*
input : string array
output : 2st string array
constraints : 딱히 없는듯. 내용물은 다 string으로 만들기?
edge case : if array.length == 0 return 0

DS: array, hash map
ALGO: for, sort
TIME: O(n * MlogM)
SPACE: O(n)

간단풀이
sudo:

1.for문 돌림 - 그 안에서 글자 하나, 하나당 sort를 시키자. 
2.조건문 - object 안에 obj[sortWord]가 있는지 검사함. 없으면 obj[sortWord]에 정렬이 안된 문자열을 넣어줌. 짜피 넣어주는 위치는 i이기에 끝!
*/

const words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];

const solution = () => {
  let obj = {};

  for (let i = 0; i < words.length; i++) {
    const sortWord = words[i].split("").sort().join("");

    if (obj[sortWord]) obj[sortWord].push(words[i]);
    else obj[sortWord] = [words[i]];
  }
  return Object.values(obj);
};
console.log(solution());
