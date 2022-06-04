/*
Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.
*/
//이건 대체 무슨 문제일까...

let input = [
  1, 5, 27, 33, 55, 443, 2313, 2421, 23532, 422, 3523532, 23234, 24234325,
  2343252363564, 457, 5474575474575678678768, 1111,
]; //대략 길이를 1만정도로 생각
function solution(input) {
  let random_element = null;
  for (let i = 0; i < input.length; i++) {
    if (i == 0) random_element = input[i];
    else if (Math.floor(Math.random() * (i + 1)) + 1 == 1) {
      random_element = input[i];
    }
  }
  return random_element;
}
console.log(solution(input));
