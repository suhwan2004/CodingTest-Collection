/*
bruthe force solution
Time : O(N^3 *M)
Space : O(N(1+N)/2 => N^2)
*/
/*
function solution(pattern, string) {
  let flag = false;
  if (pattern[0] === "y") {
    pattern = pattern.split("");
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] === "y") pattern[i] = "x";
      else pattern[i] = "y";
    }
    flag = true;
    pattern.join("");
  }

  let basic = new Map(); //x, y의 패턴. x와 y의 갯수.
  for (let i = 0; i < pattern.length; i++) {
    if (basic.has(pattern[i])) basic.set(pattern[i], basic.get(pattern[i]) + 1);
    else basic.set(pattern[i], 1);
  }
  let checkX = new Map();
  let checkY = new Map();

  for (let i = 1; i <= string.length; i++) {
    // O(N^2)
    let map = new Map();
    for (let j = 0; j < string.length - i + 1; j++) {
      let word = string.substring(j, j + i);
      if (map.has(word)) {
        map.set(word, map.get(word) + 1);
      } else map.set(word, 1);
    }

    for (let [k, v] of map) {
      if (checkX.has(k.length)) {
        checkX.get(k.length).push(k);
      } else checkX.set(k.length, [k]);

      if (checkY.has(k.length)) {
        checkY.get(k.length).push(k);
      } else checkY.set(k.length, [k]);
    }
  }
  //console.log(checkX, checkY);
  for (let [k, v] of checkX) {
    //O(N) ... 다 종합하면 O(N^3 * M)
    let count = k * basic.get("x"); // 지금 보는 x패턴이 가지는 길이. 3이 될 것임.
    let len = string.length - count; //y가 가질 수 있는 길이.
    if (len % basic.get("y") === 0 && checkY.has(len / basic.get("y"))) {
      for (let wordY of checkY.get(len / basic.get("y"))) {
        //O(N)
        let result = "";
        for (let x of v) {
          //O(N)
          for (let i = 0; i < pattern.length; i++) {
            //O(M)
            if (pattern[i] === "x") {
              result += x;
            } else {
              result += wordY;
            }
          }

          if (result === string) {
            if (flag) return [wordY, x];
            else return [x, wordY];
          }
        }
      }
    }
  }
  return [];
}

console.log(
  solution(
    "yxyyyxxy",
    "baddaddoombaddaddoomibaddaddoombaddaddoombaddaddoombaddaddoomibaddaddoomibaddaddoom"
  )
);
/*
"gogopowerrangergogopowerranger"
*/

/*
Time : O(N^2)
Space : O(N);
*/
function solution(pattern, string) {
  //pattern과 string의 경우 둘 다 비어있지 않은 배열로 들어옴.
  pattern = pattern.split("");
  let flag = false;
  if (pattern[0] === "y") {
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] === "x") pattern[i] = "y";
      else pattern[i] = "x";
    }
    flag = true; // 코드가 끝나갈 때 쯤 x,y를 다시 변경해줄 필요가 있음.
  }

  let map = new Map(); // x와 y의 갯수를 저장해보기.
  map.set("x", 0);
  map.set("y", 0);
  let y_position = -1; // y가 들어가는 상대적인 위치.

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === "x") map.set("x", map.get("x") + 1);
    else {
      if (y_position === -1) y_position = i;
      map.set("y", map.get("y") + 1);
    }
  }
  if (map.get("y") === 0) {
    // edge case => x 또는 y 패턴에 몰려있는 경우일 때.
    let count = map.get("x");
    let sub, str;
    if (string.length % count === 0) {
      //나머지가 남는다면 만들수 없는 조합임.
      str = "";
      sub = string.substring(0, string.length / count);
      for (let i = 0; i < count; i++) {
        str += sub;
      }
      if (str === string) {
        //만약, flag가 true라면 x와 y는 역전되어야 함.
        return flag ? ["", sub] : [sub, ""];
      }
    } else return [];
  }

  for (let i = 1; i <= string.length; i++) {
    let xSub = string.substring(0, i); // x 패턴이라고 가정한 문자열.
    let y_size = (string.length - xSub.length * map.get("x")) / map.get("y"); // y 패턴 문자열의 크기.
    let y_start = xSub.length * y_position; // y 패턴 문자열의 시작 위치
    let resStr = "";
    if ((string.length - xSub.length * map.get("x")) % map.get("y") === 0) {
      let ySub = string.substring(y_start, y_start + y_size);
      for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === "x") resStr += xSub;
        else resStr += ySub;
      }
      if (resStr === string) return flag ? [ySub, xSub] : [xSub, ySub];
    }
  }
  return [];
}

console.log(solution("xxxx", "aaaaaaaa"));
