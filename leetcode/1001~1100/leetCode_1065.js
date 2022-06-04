class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (const c of word) {
      if (node[c] == null) node[c] = {};
      node = node[c];
    }
    node.isWord = true;
  }
}

var indexPairs = function (text, words) {
  const len = text.length;
  const trie = new Trie();
  const { root } = trie;
  const res = [];
  for (const word of words) {
    trie.insert(word);
  }

  for (let i = 0; i < len; i++) {
    let j = i;
    let node = root[text.charAt(j)];

    while (node && j < len) {
      if (node.isWord) res.push([i, j]);
      j++;
      node = node[text.charAt(j)];
    }
  }
  return res;
};
