/*write a function that takes in a non-empty array of distinct integers and an integer represention a target sum. The function should find
all quadruplets in the array that sum up to the target sum and return a two-dimension array of all these quadruplets in no particular order.

if no four numbers sum up to the target sum, the function should return an empty array.


Sample Input
 array = [7,6,4,-1,1,2]
 targetSum = 16

Sample Output
 [[7,6,4,-1], [7,6,1,2]]

한국어 해석

고유한 정수의 비어 있지 않은 배열과 정수 표현을 대상 합계로 취하는 함수를 작성하십시오. 함수는 다음을 찾아야 합니다.
목표 합계로 합산되는 배열의 모든 사중항은 특정 순서 없이 이러한 모든 사중항의 2차원 배열을 반환합니다.

4개의 숫자 합계가 목표 합계에 도달하지 않으면 함수는 빈 배열을 반환해야 합니다.


결론적으로 길이가 4이면서 그 요소들을 다 더했을 때 targetSum에 만족하면 됨.


Input : array, targetSum
output : 2st array
C : non-empty array, distinct integers...
E : ??


DS : Map , array
ALGO : for
Time : O(array^2 + (mkmap^2) + n) => 여기서 가장 최악의 경우가 나오는 것은 mkmap^2 일 것이기에 O(mkmap^2)
Space : O(Map + resultArr)인데 resultArr은 Map의 단축본이므로 O(Map)으로 설정함.
 
*/

function solution(array, targetNum) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    //2개씩 쪼개기.
    for (let j = i + 1; j < array.length; j++) {
      let arr1 = [];
      arr1.push(array[i]);
      arr1.push(array[j]);
      arr.push(arr1);
    }
  }
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    // 4개로 합치기
    for (let j = 0; j < arr.length; j++) {
      let newArr = [];
      let flag = false;
      if (i !== j) {
        for (let m = 0; m < 2; m++) {
          for (let k = 0; k < 2; k++) {
            if (arr[i][m] == arr[j][k]) flag = true;
          }
        }
        if (flag == false) {
          newArr = [...arr[i], ...arr[j]];
          resArr.push(newArr);
        }
      }
    }
  }
  let returnArr = [];
  for (let i = 0; i < resArr.length; i++) {
    // 하나씩 16이 되는지 확인하고 새 배열에 넣어주기.
    let sum = 0;
    for (let j = 0; j < 4; j++) {
      sum += resArr[i][j];
    }
    if (sum == targetNum) {
      returnArr.push(resArr[i].sort((a, b) => a - b));
    }
  }
  let map = new Set();
  for (let i = 0; i < returnArr.length; i++) {
    //중복제거
    for (let j = 0; j < returnArr.length; j++) {
      if (
        i !== j &&
        JSON.stringify(returnArr[i]) == JSON.stringify(returnArr[j])
      ) {
        j--;
        i--;
        returnArr.splice(j, 1);
      }
    }
  }
  for (let i = 0; i < returnArr.length; i++) {
    // sort(안해줘도 되긴 함)
    returnArr[i] = returnArr[i].sort((a, b) => b - a);
  }
  return returnArr;
}
console.log(solution([7, 6, 4, -1, 1, 2], 16));

/*
const array = [7, 6, 4, -1, 1, 2];
const targetSum = 16;

const Solution = (array, targetSum) => {
  let map = new Map();
  for (let i = 0; i < array.length - 1; i++) {
    //O(array^2)
    for (let j = i + 1; j < array.length; j++) {
      if (map.has(array[i] + array[j])) {
        let ary = map.get(array[i] + array[j]);
        ary.push([i, j]);
        map.set(array[i] + array[j], ary);
      } else {
        map.set(array[i] + array[j], [[i, j]]);
      }
    }
  }
  let resultArr = [];
  for (let i of map) {
    //O(map^2 * k * m)
    let target = 16 - i[0];
    for (let j of map) {
      if (j[0] == target && i[0] !== j[0]) {
        for (let k of i[1]) {
          for (let m of j[1]) {
            let arr = [...k, ...m];
            resultArr.push(arr);
          }
        }
      }
    }
  }
  for (let i = 0; i < resultArr.length; i++) {
    //O(n)
    resultArr[i] = resultArr[i].sort((a, b) => a - b);
  }
  let returnArr = [];
  for (let i = 0; i < resultArr.length; i++) {
    //O(n)
    let check = 0;
    let flag = false;
    let flag2 = true;
    for (let j = 0; j < 4; j++) {
      if (j == 0) check = resultArr[i][j];
      else {
        if (check == resultArr[i][j]) {
          flag = true;
          break;
        } else {
          check = resultArr[i][j];
        }
      }
    }
    if (flag == false) {
      for (let m = 0; m < returnArr.length; m++) {
        if (JSON.stringify(returnArr[m]) === JSON.stringify(resultArr[i])) {
          flag2 = false;
        }
      }
      if (flag2 == true) {
        returnArr.push(resultArr[i]);
      }
    }
  }
  for (let i = 0; i < returnArr.length; i++) {
    // O(n) => 최악의 경우 resultArr와 길이가 비슷할수도 있기에 n으로 둠
    for (let j = 0; j < 4; j++) {
      returnArr[i][j] = array[returnArr[i][j]];
    }
  }
  return returnArr;
};

console.log(Solution(array, targetSum));
*/
