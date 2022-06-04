let input = [
  "app/index.html",
  "app/menu/viewController.js",
  "app/css/view.css",
  "app/menu/view.js",
  "app/menu/side/side.js",
];

/*output = 
`
    --app
      --css
          --view.css
      --index.html
      --menu
          --viewController.js
          --view.js
      --side
          --side.js
`
*/
/*
풀 방법... 일단, split을 써서 짤라볼까?

자르고 나서 분명히 중복되는 요소들이 있을텐데...

map을 하나 써볼까.
app : 1
menu : 2
view : 3

app : {menu, view},
menu : {~~},
view : {~~},


*/

const solution = (input) => {
  let count = 0;
  let tab = " ";
  let map = new Map();
  let flag = 0;

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split("/");
  }

  while (true) {
    flag = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i].length > count) {
        console.log(input[i].length);
        console.log(count);
        console.log("....");
        continue;
      } else flag++;
      if (!map.get(input[i][count])) {
        map.set(input[i][count], []);
      } else {
        // 존재하면 생각해봐야 될게
        if (count != 0) {
          // 아마 이런 경우는 0이 아닐 때 뿐일 것임.
          //1.먼저 app에 넣어주고 app에 이미 존재한다면 이건 스킵.
          //2.자기 것도 새로 만들어 줘야됨. 근데 이것도 위에 app에 이게 존재했으면 스킵.
          if (
            map.get(input[i][count - 1]).indexOf(input[i][count - 1]) == false
          ) {
            // 상위에 자기가 기록이 되어 있는지 확인.
            let arr = map.get(input[i][count - 1]);
            arr.push(input[i][count]);
            map.set(input[i][count - 1], arr);

            //자기 본인도 아마 map에 없을 거기 때문에 새로 만들어줌
            map.set(input[i][count], []);
          } else {
            continue;
          }
        }
      }
    }
    if (flag == 0) break;
    count++;
  }
  console.log(map);
};

console.log(solution(input));
