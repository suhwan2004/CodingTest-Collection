/*
Input : String(path)
Output : String (modified path)
Contraints : 
 - 1 <= path.length <= 3000
 - path consists of English letters, digits, period '.', slash '/' or '_'.
 - path is a valid absolute Unix path.
E : x
*/

/*
my Solution

Time : O(N)
Space : O(N)
ALGO : for
Space : Array
*/
var simplifyPath = function (path) {
  let respath = [];
  path.split("/").map((cur) => {
    if (cur === "" || cur === ".") return;
    else if (cur === "..") {
      if (respath.length !== 0) respath.pop();
    } else respath.push(cur);
  });
  return respath.length === 0 ? "/" : respath.map((cur) => "/" + cur).join("");
};
