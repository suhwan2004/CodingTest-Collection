/*
10 : 40 ~ 11 : 10
37분 걸림 ㅠㅠ...
Input : String Array
Output : String Array
C : ?? 넣어야 되는 알파벳들은 원류에서 하나가 빠진것, 어떤 것도 포함이 안되면 Empty
Edge case : 하나도 적용이 안되거나, 넣을 여건이 안되면 빈 배열을 return 해줘야됨.

DS : hashMap, array
ALGO : Sort , for
Time : O(n^2)    n == array.length
Space : O(m)     m == root.length

1. sort를 시킴.
2. object 식으로 해서  각 요소마다 다음으로 갈 수 있는 요소를 넣어줄 것들...
 문제점 : 이전에 더 갈 수 있는 루트랑 덜 갈수 있는 루트가 있을텐데 그걸 비교를 어케하지?
   -> sort를 돌렸으니까 단어를 하나씩 돌면서 그 단어에서 나올 수 있는 단어들의 루트 수?를 기록해보자...
3. 가장 긴 루트갯수?를 가진 단어가 있을 텐데 그걸 저장.
4. 그 단어에서 나올 수 있는 루트들인 문자열을 정답 배열에 저장하고 이후에 다 완성이 되면 반환.

엣지 케이스에 대한 조건을 말해보자면
맨 처음에, 아예 입력 배열의 길이가 0이라면 바로 빈배열을 반환해줌, 각각 단어들이 갈 수 있는 루트의 수가 다 1이야(1은 본인) 빈배열을 반환.
*/

let array = ["abde", "abc", "abd", "abcde", "ade", "ae", "labde", "abcdef"];

const solution = (array) => {
  if (array.length == 0) return []; // edge case 1

  array.sort((a, b) => a.length - b.length); //nlogn  n == array.length
  //한 개는 자기보다 작은 문자열을 기록하는 object, 한 개는 최대로 뻗어갈 수 있는 수를 적어둔 object

  let root = {}; // 문자열을 기록
  let obj = {}; // 최대로 갈 수 있는 갯수 기록

  for (let i = 0; i < array.length; i++) {
    root[array[i]] = null;
    obj[array[i]] = 1;
  }

  for (let i = 0; i < array.length; i++) {
    // n
    for (let j = 0; j < array[i].length; j++) {
      // 한 단어의 길이가 더 큰가? 아니면 배열 자체의 길이더 큰가. n
      let str = array[i].substring(0, j) + array[i].substring(j + 1);
      let val;
      if (str in obj) {
        // 1
        val = obj[str] + 1; // 하위 문자열이 갈 수 있는 루트 수 + 본인
        if (val > obj[array[i]]) {
          obj[array[i]] = val;
          root[array[i]] = str;
        }
      }
    }
  }
  let flag = false;
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]] != 1) flag = true;
  }
  if (!flag) return [];
  let max = -Infinity;
  let loc = 0;
  for (let i = 0; i < array.length; i++) {
    if (max < obj[array[i]]) {
      max = obj[array[i]];
      loc = i;
    }
  }

  let resArr = [];
  let b = array[loc];
  resArr.push(array[loc]);
  for (let i = 0; i < array.length; i++) {
    let str = root[b];
    resArr.push(str);
    b = root[b];
    if (root[b] == null) break;
  }
  return resArr;
};
console.log(solution(array));
