const input = "aabccbb";

function solution(word) {
  let max = 0;
  let resArr = [];
  let arr = word.split("");
  let answer = 0;

  for (let i = 1; i < arr.length; i++) {
    let max = resArr.length;
    if (i == 1) {
      resArr.push(arr[0]);
    }
    for (let j = 0; j < resArr.length; j++) {
      if (arr[i] == resArr[j]) {
        resArr = [];
        resArr.push(arr[i]);
      }
    }
    if (max == resArr.length) {
      resArr.push(arr[i]);
    }
    if (answer < max) {
      answer = max;
    }
  }
  return answer;
}

console.log(solution(input));
