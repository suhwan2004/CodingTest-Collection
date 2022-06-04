/*
Time : O(N)
Space : O(N)

var smallestCommonElement = function(mat) {
    let map = new Map();
    
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[0].length; j++){
            map.set(mat[i][j], (map.get(mat[i][j])+1 || 1));
        }
    }
    
    let min = Infinity;
    
    for(let [k,v] of map){
        if(v === mat.length) min = Math.min(min, k);
    }
    
    return min === Infinity ? -1 : min;
};
*/

/*
Time : O(N)
Space : O(1)
*/

var smallestCommonElement = function (mat) {
  let count = 0;
  while (count <= mat.length) {
    let curVal = mat[0][count];
    let resFlag = true;
    for (let i = 1; i < mat.length; i++) {
      let l = 0,
        r = mat[0].length - 1;
      let flag = false;
      while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (mat[i][mid] === curVal) {
          flag = true;
          break;
        } else if (mat[i][mid] > curVal) r = mid - 1;
        else l = mid + 1;
      }
      if (!flag) {
        resFlag = false;
        break;
      }
    }
    if (resFlag) return curVal;
    else count++;
  }
  return -1;
};
