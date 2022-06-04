var StringIterator = function (compressedString) {
  this.arr = compressedString.split("");
  this.resArr = [];
  this.p = 0;
  let count = 0;
  let char = -1;
  //Time : O(2N) => O(N)
  for (let i = 0; i < this.arr.length; i++) {
    if (!checkNum(this.arr[i])) {
      if (char !== -1) {
        this.resArr.push([
          this.arr[char],
          Number(this.arr.slice(char + 1, i).join("")),
        ]);
        char = i;
      } else {
        char = i;
      }
    }
  }
  this.resArr.push([
    this.arr[char],
    Number(this.arr.slice(char + 1, this.arr.length).join("")),
  ]);

  function checkNum(c) {
    return c == 1 ||
      c == 2 ||
      c == 3 ||
      c == 4 ||
      c == 5 ||
      c == 6 ||
      c == 7 ||
      c == 8 ||
      c == 9 ||
      c == 0
      ? true
      : false;
  }
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function () {
  if (!this.hasNext()) return " ";
  let curState = --this.resArr[this.p][1];
  if (curState === -1) {
    this.p++;
    if (!this.hasNext()) return " ";
    else {
      this.resArr[this.p][1]--;
      return this.resArr[this.p][0];
    }
  } else {
    return this.resArr[this.p][0];
  }
};
/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function () {
  return this.resArr.length === this.p ||
    (this.resArr.length - 1 === this.p && this.resArr[this.p][1] === 0)
    ? false
    : true;
};
