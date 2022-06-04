var carPooling = function (trips, capacity) {
  let max = -Infinity;

  for (let i = 0; i < trips.length; i++) {
    max = Math.max(max, trips[i][2]);
  }

  let arr = new Array(max + 1).fill(0);

  for (let i = 0; i < trips.length; i++) {
    for (let j = trips[i][1]; j < trips[i][2]; j++) {
      arr[j] += trips[i][0];
      if (arr[j] > capacity) return false;
    }
  }
  return true;
};
