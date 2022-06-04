var shiftingLetters = function (S, shifts) {
  const n = shifts.length;

  for (let i = n - 2; i >= 0; i--) {
    shifts[i] += shifts[i + 1];
  }

  let res = "";

  for (let i = 0; i < n; i++) {
    const currPos = S.charCodeAt(i) - 97;
    const shift = shifts[i];

    const newPos = (currPos + shift) % 26;
    const newChar = String.fromCharCode(newPos + 97);

    res += newChar;
  }

  return res;
};
