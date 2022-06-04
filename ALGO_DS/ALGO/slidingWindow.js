/*



find the longest substring where there is no duplicate char in a single string


{
  a: t;
  c: t;
  b: t;
  s: t;
  J: t;
  d: t;
  l: t;
  ...
  w: t;
}
*/

//longest =   "cb"; => 2밖에 안되는데 이걸 반환하는 경우가 생김....
const word = "acbsjdalrowhekw";
v;
v;
a;
function slidingWindow(string) {
  if (!string.length) return "";

  let left = 0;
  let right = 0;
  let lgs = [0, 0];
  const map = new Map();

  //const word = "acbsjdalrowhekw";
  // map = {a,c,b,s,j,d}, a있니? => a있네 그러면 lgs갱신해 더 큰 substring일수도 있으니까 지금게... => [0,6]
  while (right < string.length) {
    const curChar = string[right];

    if (map.has(curChar)) {
      // sliding window starts
      lgs = getTheLongestLength(left, right, lgs);
      // move the left pointer
      while (string[left] !== string[right]) {
        map.delete(curChar);
        left++;
      }
      left++;
    } else {
      map.set(curChar, true); //오 나 이 단어 돌았다. 중복인지 나중에 확인 가능!
    }

    right++;
    if (right == string.length) lgs = getTheLongestLength(left, right, lgs);
  }

  return string.substring(lgs[0], lgs[1]);
}

function getTheLongestLength(left, right, lgs) {
  // left = 1, right = 14, lgs = [0,6]
  let curLength = right - left; // 우리가 만든 중복없는 substring의 길이. 13
  let longestLength = lgs[1] - lgs[0]; //가장 긴 길이! 저희가 아예 지금까지 substring을 기록 안했다면 이 값은 0이 됨. 6
  if (longestLength < curLength) {
    return [left, right];
    /*
    [1,2]
    [13,14]
    [14. 17]
    */
  }
  return lgs; // 기존에 있는게 대빵인데 굳이 더 작은걸 저장할 필요 없음.
}

console.log(slidingWindow(word));
