const s = "3[a10[bc]]";

// var decodeString = function (s) {
//   let res = "";
//   let count;
//   let arr = [];
//   for (let i = 0; i < s.length; i++) {
//     if (!isNaN(s[i])) {
//       //숫자
//       arr.push(i);
//       let k = i;
//       if (!isNaN(s[k + 1])) continue;
//       else {
//         let num = Number(s.substring(arr[0], arr[arr.length - 1] + 1));
//         [count, res] = dfs(s, i + 2, num, res); // 숫자가 발견된다면 3[aa]이런 형태일텐데 무조건 i+2에 문자열이 있을 것임.
//         i = count; // i++를 대비함.
//         arr = [];
//         continue;
//       }
//     } else {
//       res += s[i];
//     }
//   }
//   return res;
// };
// const dfs = (s, loc, num, res) => {
//   let count = loc;
//   num = num - 1;
//   let arr = [];
//   while (true) {
//     if (!isNaN(s[count])) {
//       //숫자 발견
//       arr.push(count);
//       let k = count;
//       if (!isNaN(s[k + 1])) {
//         console.log(count);
//         count++;
//         continue;
//       } else {
//         let numb = Number(s.substring(arr[0], arr[arr.length - 1] + 1));
//         [count, res] = dfs(s, count + 2, numb, res);
//         count++;
//         continue;
//       }
//     } else if (s[count] == "]") {
//       //반복의 끝.
//       if (num != 0) {
//         num--;
//         count = loc;
//       } else {
//         return [count++, res];
//       }
//     } else {
//       //순수문자.
//       res += s[count];
//       count++;
//     }
//   }
// };

// console.log(decodeString(s));

var decodeString = function (s) {
  let k = "",
    curStr = "";
  let prevStack = [],
    kStack = [];
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      k += s[i];
    } else if (s[i] === "[") {
      kStack.push(k);
      prevStack.push(curStr);
      k = "";
      curStr = "";
    } else if (s[i] === "]") {
      let prev = prevStack.pop();
      let curK = kStack.pop();
      curStr = prev + curStr.repeat(curK);
    } else {
      curStr += s[i];
    }
  }
  return curStr;
};

console.log(decodeString(s));
