var getHint = function (secret, guess) {
  let arr = [0, 0];
  secret = secret.split("");
  guess = guess.split("");
  for (let i = 0; i < guess.length; i++) {
    if (secret.indexOf(guess[i]) >= 0) {
      if (secret[i] == guess[i]) {
        arr[0] += 1;
        guess[i] = "-1";
        secret[i] = "-1";
        continue;
      }
      if (secret.indexOf(guess[i]) != i) {
        let n = secret.indexOf(guess[i]);
        arr[1] += 1;
        guess[i] = "-1";
        secret[n] = "-1";
        continue;
      }
    }
  }
  let str = String(arr[0]) + "A" + String(arr[1]) + "B";

  return str;
};

console.log(getHint("1123", "0111"));
