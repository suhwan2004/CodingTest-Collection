//Time : O(nlogn)
//Space : O(n)

const numbers = [5, 12, 11, 3, 11];
const k = 3;

const Solution = (numbers, k) => {
  let arr = []; //n 공간
  let numArr = new Map(); //n 공간

  numbers.forEach((num) => {
    //n 시간
    if (numArr.has(num)) {
      numArr.set(num, numArr.get(num) + 1);
    } else {
      //이 경우에는 아직 한번도 map에 저장안된 새것.
      numArr.set(num, 1);
    }
  });
  const resultArr = [...numArr.entries()]; //n 공간
  resultArr.sort((a, b) => b[1] - a[1]); // nlogn

  for (let i = 0; i < k; i++) {
    // n 시간
    arr.push(resultArr[i][0]);
  }
  return arr;
};

console.log(Solution(numbers, k));
