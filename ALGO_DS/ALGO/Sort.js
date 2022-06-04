//배열 하다가 나온 얘기인데 반복문은 for(let i =0~~~) 이런 기본 for문이 가장 빠름.
// function sorting(arr) {
//   /// lexical order -> alphabetically order
//   console.log(arr.sort());
//   console.log(arr.sort((a, b) => a.localeCompare(b)));
//   // console.log(
//   //   arr.reverse().sort((a, b) => {
//   //     if (a > b) return -1;
//   //     if (a < b) return 1;
//   //     return 0;
//   //   })
//   // );
// }
// sorting(array);

let arr = [1, 3, 2, 5, 4, 0, 11, 21, 44];
let str_arr = ["a", "A", "Zero", "sfe", "sewe", "happy", "b", "zero"];

//정수형의 경우 바로 sort만 시켜버리면 정상작동 안함. 아스키코드로 구분하는게 기본 sort라 애매해지는 것.
arr.sort(); // 잘못된 예시...
console.log(arr);

//내림차순(큰 -> 작은 )
arr.sort((a, b) => {
  return b - a;
});
console.log(arr);

//오름차순(작은 -> 큰)
arr.sort((a, b) => {
  return a - b;
});
console.log(arr);

console.log(str_arr.sort((a, b) => a.localeCompare(b))); // 문자열 기본 sort

console.log(
  //문자열 reverse sort
  str_arr.reverse().sort((a, b) => {
    a.localeCompare(b);
  })
);
