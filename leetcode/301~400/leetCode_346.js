/**
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.index = 0;
  this.sum = 0;
  this.arr = new Array(size).fill(0);
  this.len = size;
  this.turn = false;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  this.sum += val;
  if (this.arr.length === 0 || this.index === this.len) {
    this.sum -= this.arr[0];
    this.arr[0] = val;
    this.index = 1;
    this.turn = true;
  } else {
    this.sum -= this.arr[this.index];
    this.arr[this.index++] = val;
  }
  return this.sum / (this.turn ? this.arr.length : this.index);
};
