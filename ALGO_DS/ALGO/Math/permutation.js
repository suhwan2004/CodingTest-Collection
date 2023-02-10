/*
순열은 순서의 상관이 있는 중복없는 숫자의 묶음이다.
 => 2, 5 가 들어있더라도 5, 2가 혀용이 된다는 말이 됨.
*/
function Solution(N, R) {
  const isSelected = new Array(N + 1).fill(false); // 해당 숫자를 사용했는지
  const numbers = new Array(R);
  let totalCount = 0;
  permutation(0);
  console.log("총 경우의 수 :", totalCount);

  function permutation(cnt) {
    if (cnt === R) {
      totalCount++;
      console.log(numbers);
      return;
    }

    for (let i = 1; i <= N; ++i) {
      if (isSelected[i]) continue;
      numbers[cnt] = i;
      isSelected[i] = true;
      permutation(cnt + 1);
      isSelected[i] = false;
    }
  }
}

Solution(7, 2);
