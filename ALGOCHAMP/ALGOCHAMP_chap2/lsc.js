/*
  일단, 각 단어마다 map에 key는 단어 value는 이 단어가 누적으로 하여 갈 수 있는단계로 하여 저장함.
  이후에, 이것을 이용해서 dfs를 탐색하여 가장 긴 문자열을 찾음.

  space : O(MN);
  time : O(N^2 * M);

  N === arr.length, M === level, Z === 최대 문자열의 길이 1인 word의 갯수

  내가 생각한 dfs의 시간복잡도

  일단, 최악의 경우를 상상해봄.
  [a,b,c,d,e,f,g,h,i]
  이럴 때는 다 level이 1 이기 때문에 모든 경우를 다 돌면서 dfs에 들어갈 것임 물론, 들어간 이후에 다시 나온다고 볼 수 있음. 
   => 그렇다면 말 그대로 한번씩만 본인 위치에서 들어갔다가 나온 것이기 때문에 +N 정도로 시간복잡도에 영향을 줌.  === O(2N) => O(N)

  [a,ab,abc,abcd,abcde,abcdef, ac, abde, abcef]
  이런 경우에는... 약간 삼각형 모양으로 탐색이 된다고 볼 수 있음. 결론적으로 가는 것 같겠지만...
   => 이 경우 시간복잡도는... 뭘까..레벨만큼 깊게 들어간다고 볼 수 있기 때문에 최악에는 m개의 경우가 각자 n정도까지 갈 것 같음.
    난 일단, O(n*m*n) => O(m*n^2)일수도 있을까...? 그래도 아예 모든 경우를 다 보는 건 아니고 정리가 된 object를 참조해서 도는 것이기 때문에 너무 크게 나오진
    않을것 같긴 한데... 일단 저렇게 찍어두기로함.
  
*/

function solution(arr) {
  let map = {};
  let set = new Set(); //시간복잡도를 안 들이고 문자열이 있는지 확인하기 위해 만듬. => 근데 이거 되남?(java hashset의 경우 O(1)이 나옴.)
  let store = {};

  arr.sort((a, b) => a.length - b.length); //O(NlogN) 오름차순.
  let min = arr[0].length;

  for (let i = 0; i < arr.length; i++) {
    //O(N)
    store[arr[i]] = [];
    set.add(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    //O(NZ)
    for (let j = 0; j < arr[i].length; j++) {
      let sub = arr[i].substring(0, j) + arr[i].substring(j + 1); // 현재 j위치에 속한 글자를 자른 sub라는 문자열 생성.
      //이게 지금 몇 계층까지 갈 수 있는 것인지 확인해보는 것임.
      map[arr[i]] = (map[sub] || 0) + 1; // 이건 아예 똑같은 문자열이 arr 내에 없다고 가정한 계산임.
      //만약, 중복되는 문자열들이 존재한다면...
      //map[arr[i]] = Math.max(map[arr[i]] || 0 , (map[sub] || 0) + 1);  => 일케 하면 됨.
      if (set.has(sub)) {
        //arr 내에 sub가 있다면 key:sub의 value가 되는 배열에 arr[i]를 넣음.
        store[sub].push(arr[i]);
      }
    }
  }

  let result;
  let max = -Infinity;
  for (let [k, v] of Object.entries(map)) {
    //O(N * M * N) => O(N^2 * M)
    if (v === 1) {
      dfs(k, v, [k]);
    }
  }
  return max !== -Infinity ? result : [];

  function dfs(current, level, resArr) {
    //O(N)
    if (store[current].length === 0) {
      level++;
      if (level > max) {
        result = resArr.slice();
        max = level;
      }
      return;
    }

    //더 갈 수 있다.
    for (let k of store[current]) {
      let sliceArr = resArr.slice();
      sliceArr.push(k);
      dfs(k, level + 1, sliceArr);
    }
  }
}
console.log(
  solution(["abde", "abc", "abd", "abcde", "ade", "ae", "labde", "abcdef"])
);
