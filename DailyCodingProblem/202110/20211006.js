/*
dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext

끝까지 갔을 때 문자열의 길이가 가장 긴 파일 경로를 구하시오.
*/

let input =
  "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext";

function solution(input) {
  let arr = input.split("\n");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {}
  }
  return arr;
}
console.log(solution(input));
