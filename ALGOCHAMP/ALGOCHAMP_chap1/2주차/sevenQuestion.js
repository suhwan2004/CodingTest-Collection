/*
문자열이 주어지고, 글자 종류 k로 만들 수있는 가장 큰 서브스트링의 길이를 구해야 됨.

p
  p
    p
      p
        p
          p => 여기까지 왔으나 다른 단어의 등장으로 인해 루프가 종료. max = 6
  p
    p
      p
        p
          p=> 여기까지 왔으나 다른 단어로 인해 루프 종료. max= 6 유지...
    p
      p
        p
          p
            p=> 여기까지 왔으나 2개 이상이 됨.              
a r a a a c i
이런 느낌으로 해서  포인터의 길이는 String.length-2까지 시작점을 만들 수 있음.
*/

const string = "cbbebi";
const k = 3;

function solution(str, k) {
  let map = new Map();
  let toCharArr = str.split("");
  let max = 0;
  toCharArr.forEach((element) => {
    map.set(element, 0);
  });

  let charArr = [...map.entries()]; //[[문자, 갯수]]로 구성된 2차원배열.얀채
  let copy = charArr.slice(); //다시 원점으로 돌리기 위한 카피본.
  let str_len = 0;
  let k_number = 0;
  let point = 0;
  for (let i = 0; i < toCharArr.length; i++) {
    for (let j = 0; j < charArr.length; j++) {
      //반복을 돌면서 중복수, 생성된 단어의 길이 가늠.
      if (toCharArr[i] == charArr[j][0]) {
        if (charArr[j][1] == 0) {
          charArr[j][1] = 1;
          k_number++; // 중복카운트++
          str_len++; //글자길이++
        } else {
          str_len++;
        }
      }
    }

    if (k_number > k) {
      // 중복이 넘침.
      str_len--;
      if (max < str_len) {
        max = str_len;
      }
      str_len = 0;
      k_number = 0;
      point++;
      i = point;
    }
    if (str_len == toCharArr.length) {
      if (max < str_len) {
        max = str_len;
      }
      str_len = 0;
      k_number = 0;
      point++;
      i = point;
    }
  }

  return max;
}
console.log(solution(string, k));
