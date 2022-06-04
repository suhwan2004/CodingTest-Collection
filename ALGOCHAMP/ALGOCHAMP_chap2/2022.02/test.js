function sumIntervals(intervals) {
  let arr = [1, 1, 2, 2, 4, 5, 5, 5];
  return arr.reduce((cur, prev) => {
    console.log(cur ^ prev);
    return cur ^ prev;
  });
}

console.log(sumIntervals(1));
