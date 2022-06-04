/*
Input : String(secret), String(guess)
Output : String( game result) , 게임에 대한 설명은 아래에 있음.
Contraints : 
 - 1 <= secret.length, guess.length <= 1000
 - secret.length == guess.length
 - secret and guess consist of digits only.
E : x
*/

/*
무슨 문제이냐 하면
예를들어 답이 1234 인데, 입력이 1324이다 이러면
2A2B임 A는 위치랑 답이 둘 다 맞는거고, B는 답만 맞는 것.

Time : O(N)
Space : O(N)
ALGO : for
DS : HashMap
*/
var getHint = function (secret, guess) {
  let bull = 0;
  let cow = 0;
  const map = {};
  for (let i = 0; i < secret.length; i++) {
    const s = secret.charAt(i);
    const g = guess.charAt(i);
    if (s === g) {
      bull++;
    } else {
      if (map[s] < 0) cow++;
      if (map[g] > 0) cow++;
      map[s] = parseInt(map[s] || "0") + 1;
      map[g] = parseInt(map[g] || "0") - 1;
    }
  }
  return `${bull}A${cow}B`;
};
