var makeConnected = function (n, connections) {
  class Unionfind {
    constructor(num) {
      this.graph = [...Array(num)].map((_, i) => i);
      this.extra = 0;
      this.component = num;
    }

    union(x, y) {
      const rootX = this.find(x);
      const rootY = this.find(y);
      if (rootX !== rootY) {
        this.graph[rootY] = rootX;
        this.component--;
      } else this.extra++;
    }
    find(id) {
      if (this.graph[id] === id) return id;
      this.graph[id] = this.find(this.graph[id]);
      return this.graph[id];
    }
  }

  let unionfind = new Unionfind(n);

  for (let [s, e] of connections) {
    unionfind.union(s, e);
  }
  let need = unionfind.component - 1;
  return unionfind.extra >= need ? need : -1;
};
