Node = function () {
  this.value = "";
  this.leaves = [];
  this.nodes = [];
};

Node.prototype.checkNodes = function (suf) {
  var node;
  for (var i = 0; i < this.nodes.length; i++) {
    node = this.nodes[i];
    if (node.value == suf[0]) {
      node.addSuffix(suf.slice(1));
      return true;
    }
  }
  return false;
};

Node.prototype.checkLeaves = function (suf) {
  var node, leaf;
  for (var i = 0; i < this.leaves.length; i++) {
    leaf = this.leaves[i];
    if (leaf[0] == suf[0]) {
      node = new Node();
      node.value = leaf[0];
      node.addSuffix(suf.slice(1));
      node.addSuffix(leaf.slice(1));
      this.nodes.push(node);
      this.leaves.splice(i, 1);
      return;
    }
  }
  this.leaves.push(suf);
};

Node.prototype.addSuffix = function (suf) {
  if (!suf.length) return;
  if (!this.checkNodes(suf)) {
    this.checkLeaves(suf);
  }
};

Node.prototype.getLongestRepeatedSubString = function () {
  var str = "";
  var temp = "";
  for (var i = 0; i < this.nodes.length; i++) {
    temp = this.nodes[i].getLongestRepeatedSubString();
    if (temp.length > str.length) {
      str = temp;
    }
  }
  return this.value + str;
};

// Node.prototype.toHTML = function () {
//   var html = "<div class=node>";
//   if (this.value.length) {
//     html += "<h3>" + this.value + "</h3>";
//   }
//   if (this.nodes.length) {
//     html += "<h4>nodes</h4><ul>";
//     for (var i = 0; i < this.nodes.length; i++) {
//       html += "<li>" + this.nodes[i].toHTML() + "</li>";
//     }
//     html += "</ul>";
//   }
//   if (this.leaves.length) {
//     html += "<h4>leaves</h4><ul>";
//     for (var i = 0; i < this.leaves.length; i++) {
//       html += "<li>" + this.leaves[i] + "</li>";
//     }
//     html += "</ul>";
//   }
//   return html;
// };

SuffixTree = function (str) {
  this.node = new Node();
  for (var i = 0; i < str.length; i++) {
    this.node.addSuffix(str.slice(i));
  }
};

console.log(SuffixTree("abac").);
