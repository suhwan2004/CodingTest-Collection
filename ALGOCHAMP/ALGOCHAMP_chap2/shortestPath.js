/*
4:05 ~ 4:50, 4:14

I : Path(string)
O : shorted path(string)
C : .. => 뒤로이동, 아무것도 없음 => 그냥 다음. '.' => 그냥 다음.
E : ??

DS : stack, array
ALGO : for
Time : O(N)
Space : O(N)

path.split("/")
stack을 하나 만들기.
.. => 요거 나올 때만 빼주기.

*/

function solution(path) {
  path = path.split("/");
  let stack = [];
  let res = "";
  //시작은 무조건 1부터 시작하는걸로.

  for (let i = 1; i < path.length; i++) {
    if (path[i] === "..") {
      //뒤로 이동. => stack의 마지막 것 하나 빼줌.
      stack.pop();
    } else if (path[i] === "." || path[i] === "") {
      //현 상태 유지.
      continue;
    } else {
      //stack.push()
      stack.push(path[i]);
    }
  }

  for (let word of stack) {
    res += `/${word}`;
  }
  return res;
}

console.log(solution("/foo/../test/../test/../foo//bar/./baz"));
