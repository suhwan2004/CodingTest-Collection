/*
Input : 참조
output : 참조
C : 참조
E : ??

DS : array, 
ALGO : 플로이드-와샬(다익스트라 파생), for
시간복잡도 : O(n^3)
공간복잡도 : O(board.length);
*/
function solution(n, s, a, b, fares) {
  //플로이드 마샬 알고리즘을 사용하기 위해서는 dp 알고리즘과 같은 2차원 배열이 필요함.
  const board = Array.from(Array(n), () => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) board[i][i] = 0; // 각 출발지는 0으로 만들고 시작.

  fares.forEach((pos) => {
    const [x, y, weight] = pos;
    board[x - 1][y - 1] = weight;
    board[y - 1][x - 1] = weight;
  });
  console.log(board);

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] > board[i][k] + board[k][j])
          //k는 중간지점임 한마디로 순수하게 ij로 간값보다 i -> k -> j 이렇게 k를 경유해 간 값이 더 작다면 삽입.
          board[i][j] = board[i][k] + board[k][j];
      }
    }
  }

  let answer = board[s - 1][a - 1] + board[s - 1][b - 1]; // 각각 제 살길 찾아서 간 값
  for (let i = 0; i < n; i++) {
    const shortest = board[s - 1][i] + board[i][a - 1] + board[i][b - 1];
    answer = Math.min(answer, shortest); // 어느 중간 지점까지는 함께 가고 나머지는 떨어져 간 값과 비교
  }
  //최소값 반환
  return answer;
}

console.log(
  solution(6, 4, 6, 2, [
    [4, 1, 10],
    [3, 5, 24],
    [5, 6, 2],
    [3, 1, 41],
    [5, 1, 24],
    [4, 6, 50],
    [2, 4, 66],
    [2, 3, 22],
    [1, 6, 25],
  ])
);
