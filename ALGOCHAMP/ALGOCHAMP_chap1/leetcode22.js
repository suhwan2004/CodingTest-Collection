var generateParenthesis = function (n) {
  if (n == 1) return ["()"];
  let count = 0; //괄호 (를 넣은 횟수.
  let limit = 0; // ) 넣을 수 있는 갯수
  let str = "";
  let array = [];
  for (let i = 1; i <= n; i++) {
    count = i;
    limit = n - i;
    str += "(";
    dfs(array, str, count, limit);
  }
  return array;
};

const dfs = (array, str, count, limit) => {
  console.log(str);
  if (count == 0) {
    if (limit == 0) {
      if (array.indexOf(str) >= 0) {
        return;
      } else {
        array.push(str);
        return;
      }
    } else {
      //count == 0 && limit != 0 한 마디로 더 넣을 (이 있다는 것임.
      dfs(array, str + "(", count + 1, limit - 1);
    }
  } else {
    //count가 남아있는 경우 한 마디로 )를 좀 더 쓸 수 있음.
    if (limit == 0) {
      //count != 0 && limit == 0
      //)를 더 쓸 수 밖에 없다.
      dfs(array, str + ")", count - 1, limit);
    } else {
      count != 0 && limit !== 0;
      //( 랑 ) 둘 다 더 쓸 수 있다.
      dfs(array, str + "(", count + 1, limit - 1);
      dfs(array, str + ")", count - 1, limit);
    }
  }
};

console.log(generateParenthesis(3));

/*

  (count = 0), (limit = 2);
  //루프가 뜨는 이유는 count =0인데 계속 내려가서 그럼.

  if (count == 0) {
    if (limit == 0) {
      array.push(str);
    } else {
      //( 더 넣을 수 있음.
      dfs(array, str + "(", count + 1, limit - 1);
    }
  } else {
    dfs(array, str + ")", count - 1, limit);
    dfs(array, str + "(", count + 1, limit - 1);
    return;
  }
*/
