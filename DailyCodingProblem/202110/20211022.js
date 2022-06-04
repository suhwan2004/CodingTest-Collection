/*
Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.

Recall that the median of an even-numbered list is the average of the two middle numbers.

For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:
*/

/*
브루트 포스 솔루션
Time : O(n^2logn), n === arr.length
Space : O(n), n === arr.length
*/
function solution(arr) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    a.push(arr[i]);
    a.sort((a, b) => a - b);
    if (a.length % 2 === 0) {
      console.log(
        (a[Math.floor(a.length / 2) - 1] + a[Math.floor(a.length / 2)]) / 2
      );
    } else {
      //홀수일 때
      console.log(a[Math.floor(a.length / 2)]);
    }
  }
}

/*
옵티멀 솔루션
 min과 maxheap을 사용하면 시간복잡도가 O(n)까지 줄어들긴 함.

 다만, 이 솔루션 코드 자체에서 생각을 해볼 것은. 자바에서는 힙이 없어서 배열로 구현을 한 코드고..
 unshift 특성상 배열의 앞에 요소를 끼워넣는 것인데, max 배열의 요소들이 한칸씩 다 뒤로 가야됨. 이러면 시간복잡도가 O(max.length)추가.
 아무리 최악의 경우라도 max.length === arr.length/2 이렇게 나올 것이기 때문에 결론적으로 보면 시간복잡도는
 O(n x n/2) => O(1/2n^2)일케 나옴. 상수는 제거를 해야되니까 O(n^2)이 나올것.
 
 다른 언어일 경우 힙을 우선순위 큐로 손 쉽게 구현가능하기 때문에 정상적으로 O(n)이 나올 것. 지금 이 코드는 어쩔 수 없이 O(n^2)이 나온 케이스...
 space의 경우 각 배열당 O(1/2n-1), O(1/2n+1)이 나오기 때문에 둘 다 합쳐도 O(n)이고, 둘이 각각 구현된거라 따로 생각해도 O(n)!
 결론
 Time : O(n^2) => n === arr.length (JAVA, PYTHON으로 짤 시에 O(n))
 Space : O(n) => n === arr.length
*/
function optimal(arr) {
  let min = [];
  let max = [];
  //첫번째 for => O(n)
  for (let i = 0; i < arr.length; i++) {
    if (min.length === max.length) min.push(arr[i]);
    else max.unshift(arr[i]);

    let nlen = min.length;
    let xlen = max.length;
    if (nlen > 0 && xlen > 0 && min[nlen - 1] > max[0])
      swap(min, max, nlen - 1, 0);
    if (nlen > 1 && min[nlen - 1] < min[nlen - 2])
      swap(min, min, nlen - 1, nlen - 1);
    if (xlen > 1 && max[0] > max[1]) swap(max, max, 0, 1);

    if (nlen === xlen) console.log((min[nlen - 1] + max[0]) / 2);
    else console.log(min[nlen - 1]);
  }
  console.log(min, max);
}
function swap(a, b, len1, len2) {
  [a[len1], b[len2]] = [b[len2], a[len1]];
}
//console.log(solution([2, 1, 5, 7, 2, 0, 5]));
console.log(optimal([2, 1, 5, 7, 2, 0, 5]));

/*
1 => 1
1,3 => 2
1,3,2 => 1,2,3 => 2
1,3,2,4 => 2.5
1,3,2,4,6 => 1,2,3,4,6 => 3
1,3,2,4,6,5 => 1,2,3,4,5,6 => 3.5
1,3,2,4,6,5,8 => 1,2,3,4,5,6,8 => 4
1,3,2,4,6,5,8,7 => 1,2,3,4,5,6,7,8 => 4.5
1,3,2,4,6,5,8,7,9 => 1,2,3,4,5,6,7,8,9 => 5
*/
