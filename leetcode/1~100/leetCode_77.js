/*
4:44 ~ 5:16

I : Int(n), Int(k)
O : Int 2st Array(all combination)
C :
 - 1 <= n <= 20
 - 1 <= k <= n
E : x

DS: Array
ALGO: DFS, BackTracking
Time: O(N * Backtracking)
Space: O(M), M === res.length

푸는법

1. 결과를 넣을 배열 하나를 만듬. (res = [])
2. for(let i = 1; i <= n-k+1; i++) 요런식의 반복문을 만든다.
3. 그리고, 그 안에서 DFS를 실시함. DFS([i])
4. DFS끝남. 그러면 저기 위에 res가 완성되어 있을 것 같음. return res;

DFS(arr)
  if(arr.length === k){
    res.push(arr);
    return;
  }
  
  for(let i = arr[arr.length-1]+1; i < n - k + 1; i++){
    let arr1 = arr.slice();
    arr1.push(i);
    DFS(arr1);
  }

*/
var combine = function (n, k) {
  let res = [];

  for (let i = 1; i <= n; i++) {
    DFS([i]);
  }
  return res;

  function DFS(arr) {
    if (arr.length === k) {
      res.push(arr);
      return;
    }

    for (let i = arr[arr.length - 1] + 1; i <= n; i++) {
      let arr1 = arr.slice();
      arr1.push(i);
      DFS(arr1);
    }
  }
};
