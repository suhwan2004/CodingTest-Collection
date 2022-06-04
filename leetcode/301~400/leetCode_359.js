var Logger = function () {
  this.map = new Map();
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (this.map.has(message)) {
    if (timestamp >= this.map.get(message)) {
      this.map.set(message, timestamp + 10);
      return true;
    } else {
      return false;
    }
  } else {
    this.map.set(message, timestamp + 10);
    return true;
  }
};
