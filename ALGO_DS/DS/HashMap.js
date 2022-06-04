//1. Set
const arr = [1, 2, 3, 4, 2, 3, 4, 1, 6]; // O(N);
const set = new Set(); // set은 배열이랑 비슷한 듯 하다.

//new Set()으로 set을 생성 이후 set.add(넣을 값)으로 set에 값을 추가할 수 있음.
arr.forEach((element) => set.add(element));
console.log(set);

console.log(set.has(1)); // 1이라는 위치에 값이 있는지 확인해줌. boolean 값을 반환.
set.delete(6); // 안에 들어있는 것들 중 값이 6인 것을 삭제함. 없음 말고~
console.log(set); // 삭제된 것을 확인~

console.log(set.size); // set 객체의 길이를 보여줌.

//이런 식으로도 생성가능.
// const set1 = [...new Set(arr)];
// console.log(set1);

//
//
//2.Map

const map = new Map(); // hashMap 생성.  첫번째 것이 key, 두번째 것이 value 임.
map.set("kate", 1); // 뭔가 알듯한 생성. Set은 add고 Map은 get이다.
map.set("happy", 2);
console.log(map);
console.log(map.get("kate")); // map.get(key)는 특정 key를 이용해서 원하는 value를 꺼내줌.
console.log(map.has("kate")); // value가 있는지 검사. boolean 반환.

//이미 있는 key의 value를 변하게 하기
map.set("kate", map.get("kate") + 1);
console.log(map);
