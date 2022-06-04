/*

trie를 어떻게 구현하는지 아직도 이해가 가지 않아요... 난 망했어....

O(n^2)
O(m)
*/

let bigString = "this is a big string";
let smallStrings = ["this", "yo", "is", "a", "bigger", "string", "kappa"];

const solution = (big, small) => {
  let resArr = big.split("");
  let resultArr = [];

  let word = "";
  let pointer = 0;
  for (let i = 0; i < resArr.length; i++) {
    word += resArr[i];
    resultArr.push(word);
    if (i == resArr.length - 1) {
      pointer++;
      i = pointer;
      word = "";
      if (pointer == resArr.length - 1) break;
    }
  }

  let returnArr = [];
  for (let i = 0; i < small.length; i++) {
    for (let j = 0; j < resultArr.length; j++) {
      if (small[i] == resultArr[j]) {
        returnArr[i] = true;
        break;
      } else returnArr[i] = false;
    }
  }
  return returnArr;
};

console.log(solution(bigString, smallStrings));
