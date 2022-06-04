const string = "Algo is   best!";

function solution(str) {
  const arr = Array.from(str);
  let res = [];
  let storeArr = [];
  let reverseArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(" ") != -1) {
      //이번 차례에서 봤을 때 res 안에 띄워쓰기가 존재하면?
      if (arr[i] == " ") {
        res.push(arr[i]);
        continue;
      } else {
        //이거는 빈칸이 지금까지 있었는데 이번꺼는 또 문자네?
        const word = res.join(""); //띄워쓰기를 문자로 만들어줌.
        storeArr.push(word);
        res = [arr[i]];
        continue;
      }
    } else {
      //문잔데?
      if (arr[i] != " ") {
        res.push(arr[i]);
        continue;
      } else {
        //나 지금까지 문자만 저장했는데, 띄어쓰기가 등장함...
        const word = res.join("");
        storeArr.push(word);
        res = [arr[i]];
      }
    }
  }
  const word = res.join("");
  storeArr.push(word);

  let j = 0;
  console.log(storeArr);
  for (let i = storeArr.length - 1; i >= 0; i--) {
    reverseArr[j] = storeArr[i];
    j++;
  }
  return reverseArr.join("");
}

console.log(solution(string));
