/*
https://school.programmers.co.kr/learn/courses/30/lessons/86051

input : int array numbers
output : numbers에서 0~9까지의 값중 없는 것들을 다 더한 값
Constraints :
- 1 ≤ numbers의 길이 ≤ 9
    - 0 ≤ numbers의 모든 원소 ≤ 9
    - numbers의 모든 원소는 서로 다릅니다.
Edge case : x
*/


//Bruth Force
/*
Time : O(2N) => O(N)
Space : O(N)
ALGO : for
DS : Array
*/
function bruthForce(numbers) {
    let set = new Set([0,1,2,3,4,5,6,7,8,9]);
    numbers.forEach((cur)=>set.delete(cur));
    return [...set].reduce((acc, cur)=> acc + cur, 0);
}


//Optimal Solution
/*
0~9는 따로 중복없이 들어가기 때문에 45에서 빼주면 됨.

Time : O(N)
Space : O(1);
ALGO : for
DS : Array
*/
function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}
