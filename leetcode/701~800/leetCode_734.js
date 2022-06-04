var areSentencesSimilar = function (a, b, c) {
  if (a.length !== b.length) return false;
  //build map
  const map = new Map();
  for (let [k, v] of c) {
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(v);
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) continue;
    if (map.has(a[i]) && map.get(a[i]).indexOf(b[i]) > -1) continue;
    if (map.has(b[i]) && map.get(b[i]).indexOf(a[i]) > -1) continue;
    return false;
  }
  return true;
};
