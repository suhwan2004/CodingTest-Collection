/*
write a function that takes in an array of words and returns the smallest array of characters needed to form all of the words.
The characters don't need to be in any particular order.

For example, the characters ["y","r","o","u"] are needed to form the words ["your","you","or","yo"].

Note : the input words won't contain any spaces; however, they might contain punctuation and/or special character.
*/

/*
input : String array
output : char array
C : 공백문자 포함 x. 특수문자 가능.
edge case : str.array.length == 0 return [];

ds : HashMap
algo: for, foreach
time : O(n*2m + m)   => O(nm)
space : O(arr.length)      => map도 더해지나 크기가 더 작아서 계산에 포함 안함. 
*/

const words = ["this", "that", "did", "deed", "them!", "a"];

const solution = (words) => {
  if (words.length == 0) return [];
  let arr = [];
  let map = new Map();
  for (let i = 0; i < words.length; i++) {
    let map1 = new Map();
    for (let j = 0; j < words[i].length; j++) {
      if (!map1.get(words[i][j])) map1.set(words[i][j], 1);
      else map1.set(words[i][j], map1.get(words[i][j]) + 1);
    }
    map1.forEach((value, key) => {
      if (map.get(key)) {
        if (map.get(key) < value) map.set(key, value);
        else map.set(key, value);
      }
    });
  }
  map.forEach((value, key) => {
    for (let i = 0; i < value; i++) {
      arr.push(key);
    }
  });
  return arr;
};

console.log(solution(words));
