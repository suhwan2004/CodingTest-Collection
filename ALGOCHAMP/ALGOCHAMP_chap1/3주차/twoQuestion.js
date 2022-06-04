/*
생각해야 될 것.
  yabd  = yabd   
   {} y a b d
 {} 0 1 2 3 4  0,1
 a  1 1 1 2 3  1,2
 b  2 2 2 1 2  2,3
 c  3 3 3 2 2

   {} a a a a
 {} 0 1 2 3 4
 a  1 0 1 2 3
 b  2 1 1 2 3
 c  3 2 2 2 3

 abc = aaa

 이렇게 매트릭스를 만듬. 근데 이 매트릭스에는 규칙이 있다.
 비교하는 부분이 같으면? dp[i-1][j-1] 이랑 값이 같아짐.
 임의의 위치의 값은 Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]) +1 한 값이다.
 */

const str1 = "abc";
const str2 = "yabd";

const solution = (s1, s2) => {
  let a1 = s1.split("");
  let a2 = s2.split("");
  let dp = Array.from(Array(a1.length + 1), () => Array(a2.length + 1)); //빈 2차원 배열 생성.

  for (let i = 0; i <= a1.length; i++) {
    dp[i][0] = i; // 세로 첫줄을 i값으로 넣음.
  }
  for (let j = 0; j <= a2.length; j++) {
    dp[0][j] = j; // 가로 첫줄을 지정된 값을 넣음.
  }

  for (let i = 1; i <= a1.length; i++) {
    for (let j = 1; j <= a2.length; j++) {
      if (a1[i] == a2[j]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[a1.length][a2.length];
};

console.log(solution(str1, str2));
