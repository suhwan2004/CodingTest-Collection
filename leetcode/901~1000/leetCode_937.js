/*
5:41 ~ 6:11

Input : array
output : array
C : 1 <= logs.length <= 100
3 <= logs[i].length <= 100
All the tokens of logs[i] are separated by a single space.
logs[i] is guaranteed to have an identifier and at least one word after the identifier.
Edgecase : if(logs.length == 1) return logs

DS : 
ALGO :
Time : 
Space :

배열을 let 배열과 dig 배열을 나눠보자.

*/
var reorderLogFiles = function (logs) {
  let digArr = [];
  let letArr = [];

  for (let i = 0; i < logs.length; i++) {
    for (let j = 0; j < logs[i].length; j++) {
      if (j != 0 && logs[i][j] == " ") {
        if (
          logs[i][j + 1] == "1" ||
          logs[i][j + 1] == "2" ||
          logs[i][j + 1] == "3" ||
          logs[i][j + 1] == "4" ||
          logs[i][j + 1] == "5" ||
          logs[i][j + 1] == "6" ||
          logs[i][j + 1] == "7" ||
          logs[i][j + 1] == "8" ||
          logs[i][j + 1] == "9" ||
          logs[i][j + 1] == "0"
        ) {
          digArr.push(logs[i]);
          break;
        } else {
          letArr.push(logs[i]);
          break;
        }
      }
    }
  }

  for (let i = 0; i < letArr.length; i++) {
    for (let j = i + 1; j < letArr.length; j++) {
      let str1 = letArr[i].substring(letArr[i].indexOf(" ") + 1);
      let str2 = letArr[j].substring(letArr[j].indexOf(" ") + 1);
      if (str1 == str2) {
        if (
          letArr[i].substring(0, letArr[i].indexOf(" ")) >
          letArr[j].substring(0, letArr[j].indexOf(" "))
        ) {
          [letArr[i], letArr[j]] = [letArr[j], letArr[i]];
          i--;
          j--;
          break;
        }
      } else if (str1 > str2) {
        [letArr[i], letArr[j]] = [letArr[j], letArr[i]];
      }
    }
  }

  return [...letArr, ...digArr];
};
