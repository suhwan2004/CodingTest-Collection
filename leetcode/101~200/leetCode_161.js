/*
Input : 2 String(s,t)
Output : boolean(if they are both one edit distance apart, otherwise return false.)
Contraints : 
 - 0 <= s.length, t.length <= 10^4
 - s and t consist of lowercase letters, uppercase letters, and digits.
E : 
*/

/*
Time : O(N)
Space : O(1)
ALGO : two pointer
DS : array
*/
var isOneEditDistance = function (s, t) {
  let dif = Math.abs(s.length - t.length);

  if (dif > 1) return false;
  else if (dif === 0) {
    let errorCount = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== t[i]) errorCount++;
    }
    return errorCount === 1 ? true : false;
  } else {
    let [long, short] = s.length < t.length ? [t, s] : [s, t];
    let sp = 0;
    let count = 0;
    for (let i = 0; i < long.length; i++) {
      if (long[i] !== short[sp]) count++;
      else sp++;
      if (count > 1) return false;
    }
    return true;
  }
};
