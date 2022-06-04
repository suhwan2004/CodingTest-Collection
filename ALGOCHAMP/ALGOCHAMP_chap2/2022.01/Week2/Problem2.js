/*
Start : 3:19 ~ 3:38

Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

Appointments: [[1,4], [2,5], [7,9]]
Output: false
Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.
Example 2:

Appointments: [[6,7], [2,4], [8,12]]
Output: true
Explanation: None of the appointments overlap, therefore a person can attend all of them.
Example 3:

Appointments: [[4,5], [2,3], [3,6]]
Output: false
Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.

----------------------

Input : 약속들(Int2d Array)
Output : 가능여부(Boolean)
C : 일단, 약속이 0 개 이상 있다고 가정, [s,e]의 s와 e가 같거나, e가 더 작지 않다고 가정.
E : if(input.length === 0) return true

Bruthe force
DS : Array, HashSet
ALGO : for
Time : O(N*M), N === Max length of input, M === Max length of s,e... => M이 N보다 크다면 O(N^2)보다 더 안 좋음.
Space : O(M)

Optimal Solution
DS : Array
ALGO : Sort, for
Time : O(NlogN)
Space : O(1)

-----------------

푸는 법

음... 일단, 이 문제를 보고 들었던생각은 hashset으로 푸는 방법을 생각했었음.
for 을 돌면서 안에 있는 범위 또한 더 for을 도는 것임. set에 추가 해주면서 만약에, 이미 set에 존재해 있는 key다? 이러면 바로 return false를 때리면 됨.
다만, 이랬을 때의 시간복잡도는...O(N*M)이 나올것임.(N === input.length, M === 약속의 최대 범위). M이 N과 동일하다? 그래도 O(N^2)이기 때문에 쉽지 않다...


그나마 Optimal을 생각해보자면 Sort를 쓰는 방법을 생각 했음.
첫 s의 값으로 Sort를 시키고, for loop를 한번 돔. 시작 index는 1로 시작.
전 index의 마지막 값과 현재 index의 시작값을 비교함. 만약에, 전 index의 마지막 값이 더 크다면 겹친다는 것을 의미함. 이럴 때는 return false를 해준다.
끝!
*/

//Bruthe Force Solution : Using Hash Set
function BrutheForceSolution(input) {
  if (input.length === 0) return true;
  let set = new Set();

  for (let i of input) {
    for (let j = i[0]; j <= i[1]; j++) {
      if (set.has(j)) return false;
      else set.add(j);
    }
  }
  return true;
}

//Optimal Solution : Using Sort
function OptimalSolution(input) {
  if (input.length === 0) return true;
  input.sort((a, b) => a[0] - b[0]); // sort, [s,e] 중 s로 비교하여 sorting 함.

  for (let i = 1; i < input.length; i++) {
    let lastE = input[i - 1][1];
    let curS = input[i][0];
    if (lastE > curS) {
      return false;
    }
  }
  return true;
}

console.log(
  OptimalSolution([
    [1, 4],
    [2, 5],
    [7, 9],
  ])
);

console.log(
  OptimalSolution([
    [6, 7],
    [2, 4],
    [8, 12],
  ])
);

console.log(
  OptimalSolution([
    [4, 5],
    [2, 3],
    [3, 6],
  ])
);
