//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1

//                   0,0
//                1,0   1,1
//              2,0  2,1   2,2    =>   여길 보면 i, 0     i,j 는 무조건 1로 넣어주는 것을 볼 수 있음. 2,1의 값은 1,0 + 1,1임.
//           3,0  3,1   3,2   3,3   => 3,1 = 2,0 + 2,1     ,     3,2 = 2,1 + 2,2

/*
input : int
output : 2st array
constraints : 1 <= numRows <= 30
edgecase : nonono...

DS: array
algo: DP? 
time : O(nlogn) => for 안에 for이 한번 덜함 그래서 n^2은 아닌 것 같아서 nlogn으로 결론 냄.
Space : O(m) => m은 array의 크기.
*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const n = 3;

var generate = function (numRows) {
  let answer = [];
  for (let i = 0; i < numRows; i++) {
    answer[i] = [];
    answer[i][0] = 1;
    answer[i][i] = 1;
    for (let j = 1; j < i; j++) {
      //한 depth씩 증가.
      answer[i][j] = answer[i - 1][j - 1] + answer[i - 1][j];
    }
  }
  return answer;
};
console.log(generate(n));
