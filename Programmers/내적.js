/*
input : 2 int array
output : 2 배열의 내적 (a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1])
*/

function solution(a, b) {
  return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
}
