var findCheapestPrice = function (n, flights, src, dst, k) {
  let prices = Array(n).fill(Infinity);
  prices[src] = 0;
  for (let i = 0; i < k + 1; i++) {
    let temp = [...prices];
    for (let [s, d, p] of flights) {
      if (prices[s] == Infinity) continue;
      let t = prices[s] + p;
      if (t < temp[d]) {
        temp[d] = t;
      }
    }
    prices = temp;
  }
  if (prices[dst] == Infinity) return -1;
  return prices[dst];
};
