class Q {
  constructor() {
    this.q = [];
  }
  insert(nodeAndWeight) {
    this.q.push(nodeAndWeight);
  }
  shift() {
    return this.q.shift();
  }
  hasLength() {
    return this.q.length > 0;
  }
}

// k = start point
// n = number of nodes
// time = edge...
var networkDelayTime = function (times, n, k) {
  let start = k - 1;
  let arr = new Array(n).fill(Infinity);
  let q = new Q();
  let adjacenyList = {};
  times.forEach(([u, v, w]) => {
    (adjacenyList[u - 1] = adjacenyList[u - 1] || []).push([v - 1, w]);
  });
  console.log(adj);
  arr[start] = 0;
  q.insert([start, 0]);
  while (q.hasLength()) {
    let [currentNode, currentPathWeight] = q.shift();
    let adjacentNodes = adjacenyList[currentNode];
    if (adjacentNodes) {
      adjacentNodes.forEach(([node, weight]) => {
        let candidateWeight = currentPathWeight + weight;
        if (candidateWeight < arr[node]) {
          arr[node] = candidateWeight;
          q.insert([node, candidateWeight]);
        }
      });
    }
  }
  let maxDistance = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let currentDistance = arr[i];
    if (currentDistance !== Infinity) {
      maxDistance = Math.max(currentDistance, maxDistance);
    } else {
      return -1;
    }
  }
  return maxDistance;
};
