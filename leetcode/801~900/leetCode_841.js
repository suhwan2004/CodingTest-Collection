/*
i : rooms
o : boolean
c :
n == rooms.length
2 <= n <= 1000
0 <= rooms[i].length <= 1000
1 <= sum(rooms[i].length) <= 3000
0 <= rooms[i][j] < n
All the values of rooms[i] are unique.
edge : x


시간 : O(n) 일단 2차원 내부까진 다돔.
공간 : O(visited + stack)
알고리즘 : for, while
DS : hash set, stack, array


*/
const canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const stack = [rooms[0]];
  visited.add(0);

  while (stack.length) {
    const curr = stack.pop();
    for (let i = 0; i < curr.length; i++) {
      const key = curr[i];
      if (!visited.has(key)) {
        stack.push(rooms[key]);
        visited.add(key);
      }
    }
  }

  if (visited.size === rooms.length) return true;
  else return false;
};
