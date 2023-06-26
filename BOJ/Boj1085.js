/*문제
한수는 지금 (x, y)에 있다. 직사각형은 각 변이 좌표축에 평행하고, 왼쪽 아래 꼭짓점은 (0, 0), 오른쪽 위 꼭짓점은 (w, h)에 있다. 직사각형의 경계선까지 가는 거리의 최솟값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 x, y, w, h가 주어진다.

출력
첫째 줄에 문제의 정답을 출력한다.

제한
1 ≤ w, h ≤ 1,000
1 ≤ x ≤ w-1
1 ≤ y ≤ h-1
x, y, w, h는 정수

각 좌표에서 상,하,좌,우 경계선까지의 거리를 구하는 방법은?

상 : y - h
하 : y
좌 : x
우 : w - x

이 중에서 가장 짧은 것은?
Math.min()을 통해 구하면 된다...


*/

function Main() {
  let input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map((cur) => parseInt(cur));

  console.log(
    Math.min(input[1] - input[3], input[1], input[0], input[2] - input[0])
  );
}

Main();
