/* 2:48
Input : 정수형 배열  
output : 이차원 정수형 배열
C: 다 정수값이 들어가는 정도?
E: input array의 길이가 0이면 바로 빈 배열 반환을 해준다~

DS: array
ALGO: dfs
Time: O(n!) => 망... n^2보다도 더 나올듯...
Space: O(n * n-1) => 모든 방식 공통일텐데...

   1     2         3    
 12 13  21 23     31 32        
123 132 213 231  312 321

 array => ["1","2","3"]

    target = 1 , nextArr = [2,3]
    target = 12, nextArr = [3]
    target = 123, nextArr = []
  => 배열 길이 없으면 returnArr에 값 넣고 반환해주기

       1 2 3 => 1 select -> 2 3 -> 3 -> []
                                      <-
                                      

 */

const array = [1, 2, 3];

const solution = (arr) => {
  if (arr.length == 0) return [];
  let strArr = []; // arr을 문자열로 만듬. n
  let returnArr = []; // 반환용 배열. n
  for (let i = 0; i < arr.length; i++) {
    strArr[i] = String(arr[i]);
  }
  const dfs = (target, arr) => {
    if (arr.length == 0) {
      returnArr.push([parseInt(target)]);
    }
    for (let i = 0; i < arr.length; i++) {
      let newTarget = target + arr[i];
      let nextArr = arr.slice();
      nextArr.splice(i, 1);
      dfs(newTarget, nextArr);
    }
    return;
  };
  for (let i = 0; i < strArr.length; i++) {
    let target = strArr[i];
    let nextArr = strArr.slice(); // slice()는 deep copy다...
    nextArr.splice(i, 1); // delete의 개념인데, pop이랑 shift가 맨 끝이나 처음으로 위치가 강제로되어 삭제가 된다면, 이거는 자기가 원하는 위치를 삭제할 수 있음.ㅇㅇ
    dfs(target, nextArr);
  }
  return returnArr;
};

console.log(solution(array));
