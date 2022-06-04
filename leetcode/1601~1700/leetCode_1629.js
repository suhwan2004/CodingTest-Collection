var slowestKey = function (releaseTimes, keysPressed) {
  let slow;
  for (let i = 0; i < keysPressed.length; i++) {
    let time;
    if (i == 0) slow = [keysPressed[0], releaseTimes[0]];
    else {
      time = releaseTimes[i] - releaseTimes[i - 1];
      if (time > slow[1] || (time == slow[1] && slow[0] < keysPressed[i]))
        slow = [keysPressed[i], time];
    }
  }
  return slow[0];
};
