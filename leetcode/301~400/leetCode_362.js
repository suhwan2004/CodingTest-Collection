var HitCounter = function () {
  this.score = new Map();
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  this.score.set(timestamp, this.score.get(timestamp) + 1 || 1);
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
  let s = timestamp - 300 < 0 ? 0 : timestamp - 300;
  let res = 0;
  for (let i = s + 1; i <= timestamp; i++) {
    if (this.score.has(i)) res += this.score.get(i);
  }
  return res;
};
