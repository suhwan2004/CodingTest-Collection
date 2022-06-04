var UndergroundSystem = function () {
  this.record = new Map();
  this.start = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.start.set(id, [stationName, t]);
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  let [startStation, startTime] = this.start.get(id);
  let cur = `${startStation},${stationName}`;
  let cost = t - startTime;
  if (this.record.has(cur)) {
    let res = this.record.get(cur);
    res[0] += cost;
    res[1]++;
  } else {
    this.record.set(cur, [cost, 1]);
  }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  let cur = `${startStation},${endStation}`;
  let res = this.record.get(cur);
  return res[0] / res[1];
};
