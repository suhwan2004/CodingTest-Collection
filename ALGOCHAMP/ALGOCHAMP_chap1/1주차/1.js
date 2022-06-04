/*

1  => map[0]
3 => map [0,1]
2 => map [0,1,3,2]
1 => map[0,1,3]

각 지점마다 갈 수 있는 위치가 있는 것.
그렇게 지점을 이으고 이어봤을 때 중간이든 처음이든 상관없이 중간으로 돌아오는 상황이 발생할 때 true를 반환. 아니면 false를 반환.

Input : 2st array(int)
output : boolean
C : 들어갈 수는 정수.
E : x

Time:
Space:

생각해본 푸는 법.
for(edges의 길이만큼 다 돔. i가 포인트){
  dfs();
}

dfs(){
  dfs에서는 for로 edge[i][j] 들을 dfs로 돌려줌.
  여기서 해쉬맵 써서 아예 도는 수가 2개인 순간 바로 true를 해버리는 것도 나쁘지 않을듯.짜피 해쉬의 요소탐색은 1이니...
  ㅇㅋ let's go
}





  0 : [1,3]
  1 : [2,3,4]
  2 : [0],
  3 : [],
  4 : [2,5],
  5 : [0],


  1. 처음 for 돌림. 그래서 0,1,2,3,4,5,6을 dfs 시작!
  0 : [1,3]
  child = [1,3]

  for을 돌리는데 지금 저 child 길이만큼 돌리는 거임.
  i = 0,
  i = 1,

  i = 0
  dfs(arr[0][0]);

  오오 1 도착.

  child는 2,3,4겠네?

  모양새 정리

  visted = [0,1,2];
                    v
  for(let i = 0; i<[1,3].length; i++){
                      v
    for(let j = 0; i<[2,3,4]; i++){
      
      for(let k = 0; k<[0]; i++){
        이렇게 되면 0을 볼건데...
        cycle = True;
        if(cycle == true ){
          return true; 
        }


    }
  }
   
  
    1  2  3  4 
  0 
    1  2  3  0
  visited = [0,1,2,3,4]; 4까지 왔음.
  근데, 4가 막혔음.
  이건 망한 기록이니까
  이걸 들고 다른 DFS를 돌면 안되잖아.
  if (visited[curNodeIdx]) return true;
  요거를 볼텐데...
  보니까 우리 이미 0 돌았네?  return True;
*/

//const edges = [[1], [3], [1], [2]];
const edges = [[1, 3], [2, 3, 4], [0], [], [2, 5], []];
//const edges = [[1], [3], [], [2]];
//const edges = [[0]];

//돌 때마다 현재 위치를 key로 저장하자.

const solution = (arr) => {
  let bol = [false];
  for (let i = 0; i < arr.length; i++) {
    let map = new Map(); // 해쉬맵 사용.
    dfs(arr, i, map, bol);
    if (bol[0]) return true;
  }
  return false;
};

const dfs = (arr, i, map, bol) => {
  map.set(i, 1);
  if (arr[i].length == 0) return;
  for (let j = 0; j < arr[i].length; j++) {
    if (map.get(arr[i][j])) {
      bol[0] = true;
      return;
    }
    dfs(arr, arr[i][j], map, bol);
    map.delete(arr[i][j]);
  }
};

console.log(solution(edges));
