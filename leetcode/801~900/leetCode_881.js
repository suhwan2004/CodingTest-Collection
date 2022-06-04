var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let l = 0,
    r = people.length - 1,
    count = 0;
  while (l <= r) {
    count++;
    if (people[l] + people[r] <= limit) l++;
    r--;
  }
  return count;
};
