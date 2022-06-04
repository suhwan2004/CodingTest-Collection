let dict = {
  key1: "1",
  key2: {
    a: "2",
    b: "3",
    c: {
      d: "3",
      e: {
        "": "1",
      },
    },
  },
};

function Solution(dict) {
  let obj = {};
  for (let i of Object.keys(dict)) {
    dfs(dict, i, "", obj);
  }
  return obj;
}

function dfs(dict, loc, front, obj) {
  if (typeof dict[loc] == "string") {
    obj[front + `${loc}`] = dict[loc];
  } else {
    for (let i of Object.keys(dict[loc])) {
      let root = front + (i !== "" ? `${loc}.` : `${loc}`);
      dfs(dict[loc], i, root, obj);
    }
  }
}

console.log(Solution(dict));
