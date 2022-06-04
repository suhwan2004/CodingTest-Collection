/*
정수 배열이 주어지면 최대 1개의 요소를 수정하여 배열이 감소하지 않을 수 있는지 여부를 결정하는 함수를 작성하십시오.

예를 들어 배열 [10, 5, 7]이 주어지면 true를 반환해야 합니다. 배열을 감소하지 않도록 10을 1로 수정할 수 있기 때문입니다.

배열 [10, 5, 1]이 주어지면 false를 반환해야 합니다. 비감소 배열을 얻기 위해 한 요소를 수정할 수 없기 때문입니다.
*/

function Solution(arr) {
  let chance = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) continue;
    else {
      if (chance === 1) {
        chance--;
        continue;
      }
      return false;
    }
  }
  return true;
}
console.log(Solution([10, 5, 1]));
