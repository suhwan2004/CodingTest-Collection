//start : 12:00 ~ 12:30

let input = [-9, -2, 0, 2, 3];

//Bruthe force
//O(NLogN), O(1)
function solution(arr) {
  if (arr.length === 1) return [Math.pow(arr[0], 2)];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(arr[i], 2);
  }
  arr.sort((a, b) => a - b);
  return arr;
}

//Optimal
//O(N), O(N)
function OptimalSolution(arr) {
  if (arr.length === 1) return [Math.pow(arr[0], 2)]; //edge case
  let minArr = [];
  let plusArr = [];
  let resArr = [];

  let mP = 0,
    pP = 0;

  for (let i of arr) {
    i < 0 ? minArr.push(i) : plusArr.push(i);
  }
  minArr.reverse();

  if (minArr.length === 0 || plusArr.length === 0) {
    let curArr = minArr.length === 0 ? plusArr : minArr;
    resArr = curArr.map((val) => Math.pow(val, 2));
    return resArr;
  }

  while (mP < minArr.length || pP < plusArr.length) {
    let mVal = mP === minArr.length ? Infinity : Math.pow(minArr[mP], 2);
    let pVal = pP === plusArr.length ? Infinity : Math.pow(plusArr[pP], 2);

    if (mVal < pVal) {
      resArr.push(mVal);
      mP++;
    } else {
      resArr.push(pVal);
      pP++;
    }
  }
  return resArr;
}

console.log(OptimalSolution(input));
