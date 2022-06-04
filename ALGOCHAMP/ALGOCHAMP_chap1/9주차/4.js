let one = "algoexpert";
let two = "your-dream-job";
let three = "your-algodream-expertjob";

let answer = false;
function Solution(one, two, three, i) {
  if (typeof one == "string") {
    one = one.split("");
    two = two.split("");
  }
  let oneC;
  let twoC;
  for (let j = i; j < three.length; j++) {
    if (one[0] !== two[0]) {
      if (one[0] == three[j]) {
        one.shift();
        continue;
      } else {
        two.shift();
        continue;
      }
    } else {
      //둘 다 같은 경우는...
      oneC = one.slice();
      twoC = two.slice();
      oneC.shift();
      twoC.shift();
      Solution(oneC, two.slice(), three, j + 1);
      Solution(one.slice(), twoC, three, j + 1);
    }
  }
  if (one.length == 0 && two.length == 0) {
    answer = true;
    return answer;
  } else {
    if (answer) return true;
    else {
      answer = false;
      return false;
    }
  }
}

console.log(Solution(one, two, three, 0));
