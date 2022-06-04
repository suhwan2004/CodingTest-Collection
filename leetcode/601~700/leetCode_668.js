/* bruthe force => runtime error...
var findKthNumber = function(m, n, k) {
    let arr = Array.from(Array(m), () => new Array(n).fill(0));
    for(let i = 0; i < arr.length; i++){
        arr[i][0] = i+1;
    }
    for(let j = 0; j < arr[0].length; j++){
        arr[0][j] = j+1;
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[0].length; j++){
            if(arr[i][j] === 0) arr[i][j] = arr[i][0] * arr[0][j];
        }
    }
    let res = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0;j < arr[0].length; j++){
            res.push(arr[i][j]);
        }
    }
    res.sort((a,b) => a-b);
    return res[k-1];
};
*/
var findKthNumber = function (m, n, k) {
  // Check how many numbers per row x is greater than
  function enough(x) {
    let count = 0;
    for (let i = 1; i <= m; i++) {
      count += Math.min(Math.floor(x / i), n);
    }
    return count >= k;
  }

  let lo = 1,
    hi = m * n;
  // Binary search template
  while (lo < hi) {
    let mi = lo + Math.floor((hi - lo) / 2);
    if (enough(mi)) hi = mi;
    else lo = mi + 1;
  }
  return lo;
};
