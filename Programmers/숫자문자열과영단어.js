function solution(s) {
  var answer = 0;

  let l = 0,
    r = 0;
  let numSet = new Set();
  let strMap = new Map();
  let arr = s.split("");
  let resultArr = [];

  numSet.add("0");
  numSet.add("1");
  numSet.add("2");
  numSet.add("3");
  numSet.add("4");
  numSet.add("5");
  numSet.add("6");
  numSet.add("7");
  numSet.add("8");
  numSet.add("9");

  strMap.set("zero", "0");
  strMap.set("one", "1");
  strMap.set("two", "2");
  strMap.set("three", "3");
  strMap.set("four", "4");
  strMap.set("five", "5");
  strMap.set("six", "6");
  strMap.set("seven", "7");
  strMap.set("eight", "8");
  strMap.set("nine", "9");

  let curStr = "";
  while (r < s.length) {
    curStr += arr[r];
    //지금 문자가 숫자임
    if (numSet.has(curStr)) {
      resultArr.push(curStr);
      r++;
      l = r;
      curStr = "";
      continue;
    }

    if (strMap.has(curStr)) {
      resultArr.push(strMap.get(curStr));
      r++;
      l = r;
      curStr = "";
      continue;
    }

    r++;
  }

  return parseInt(resultArr.join(""));
}
