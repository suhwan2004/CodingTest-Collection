/*
Input : 2 String(s, t)
Output : boolean(is this Isomorphic Strings?)
Contraints : 
 - 1 <= s.length <= 5 * 10^4
 - t.length == s.length
 - s and t consist of any valid ascii character.
Edge case : if(s.length === 1) return true;
*/

/*
Bruth force Solution
Time : O(N)
Space : O(1) => 1~ 256 valid size...
ALGO : for
DS : HashMap, Array
*/
var isIsomorphic = function (s, t) {
  if (s.length === 1) return true;
  let map = new Map(),
    map1 = new Map();

  let sN = 0,
    tN = 0;

  let resS = [],
    resT = [];

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) resS.push(map.get(s[i]));
    else {
      map.set(s[i], ++sN);
      resS.push(sN);
    }

    if (map1.has(t[i])) resT.push(map1.get(t[i]));
    else {
      map1.set(t[i], ++tN);
      resT.push(tN);
    }

    if (resS[resS.length - 1] !== resT[resT.length - 1]) return false;
  }
  return true;
};

/*
Optimal Solution
Time, Space is equal Bruth force Solution
but, code is simple
*/

// TC = O(n); SC = O(256) ~ O(1)
var isIsomorphic = function (s, t) {
  if (s.length === 1) return true;

  const sMap = new Map(),
    tMap = new Map();
  for (let i = 0; i < s.length; ++i) {
    if (
      (sMap.has(s[i]) && sMap.get(s[i]) !== t[i]) ||
      (tMap.has(t[i]) && tMap.get(t[i]) !== s[i])
    ) {
      return false;
    }
    sMap.set(s[i], t[i]);
    tMap.set(t[i], s[i]);
  }
  return true;
};
