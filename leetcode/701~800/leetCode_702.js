/*
Bruth force 
Time : O(n)
space : O(1)
but, time of this solution is O(N) over O(Logn)

var search = function (reader, target) {
    for(let i = 0; i < reader.length; i++){
        if(target === reader[i]) return i;
    }
    return -1;
};
*/

/*

Time : O(LogN), N === secret.length
Space : O(1)
*/
var search = function (reader, target) {
  let l = 0,
    r = Math.pow(10, 4) - 1;
  while (l < r) {
    let mid = Math.floor(l + (r - l) / 2);
    let cur = reader.get(mid);
    if (cur === target) return mid;
    else if (cur > target) r = mid - 1;
    else l = mid + 1;
  }
  if (reader.get(l) === target) return l;
  if (reader.get(r) === target) return r;
  return -1;
};
