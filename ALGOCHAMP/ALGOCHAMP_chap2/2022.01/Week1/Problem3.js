/*
Problem Statement#
Design a class to calculate the median of a number stream. The class should have the following two methods:

insertNum(int num): stores the number in the class // class에 주어진 저장공간?(number stream) 내에 값을 push
findMedian(): returns the median of all numbers inserted in the class //저장해논 number stream에서 median 값을 구해라.
If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.




Example 1:
1. insertNum(3)
2. insertNum(1)
3. findMedian() -> output: 2
4. insertNum(5)
5. findMedian() -> output: 3
6. insertNum(4)
7. findMedian() -> output: 3.5

1,3,5 => 3
1,3,4,5 => 3.5



하나씩 넣어주면서, sort => 시간복잡도가 답이 없다...

1.스왑해주기
2. 두 배열의 각각 끝값이랑, 첫값이랑 가져와서 평균구하기.
insertNum = > 말 그대로 맨 처음에 앞 배열에 넣음. 그 이후에, 저기  
------------------------------------------

28
start time : 2 : 58 

Input : insertNum(n)에서 매개변수인 n (int)
Output : findMedian 했을 때 가운데값인 median (int)
C : 
  number stream의 길이가 0이어도 findMedian이 들어갈 수 있음.
E : 
  findMedian()을 돌렸을 때, number stream의 길이가 0이라면 null을 반환할 것.

DS: Array
ALGO : for
Time : O(N^2)// js로 안 짜면 O(N)
Space : O(N)

N === insertNum을 해서 불린 number_Stream.length

푸는법 : 

insertNum을 했을 때, class 내에 있는 배열에 매개변수로 들어온 값을 push 해준다.
findMedian을 했을 때,
0,1,2,3,4
*/

/*
브루트 포스 솔루션

getMedian 할 때만 sorting 시켜주기.
*/
function brutheforce() {
  this.arr = [];
  this.findMedian = () => {
    if (this.arr.length === 0) return null;
    this.arr.sort((a, b) => a - b);
    if (this.arr.length % 2 === 0) {
      //짝수
      let m = Math.floor(this.arr.length / 2);
      return (this.arr[m] + this.arr[m - 1]) / 2;
    } else {
      //홀수
      return this.arr[Math.floor(this.arr.length / 2)];
    }
  };
  this.insertNum = (num) => {
    this.arr.push(num);
  };
}

let one = new brutheforce();

one.insertNum(3);
one.insertNum(1);
console.log(one.findMedian());
one.insertNum(5);
console.log(one.findMedian());
one.insertNum(4);
console.log(one.findMedian());

function optimalSolution() {
  this.lArr = [];
  this.rArr = [];
}
