const width = 4;
const height = 3;

/*
Time : O(n) => n은 2차원 배열의 크기.
Space : O(n) 
*/

const solution = (w, h) => {
  let answer = 0;
  let arr = new Array(h);

  for (var i = 0; i < h; i++) {
    arr[i] = new Array(w);
    //map[i] = new Array(h);
  }

  for (let i = 0; i < w; i++) {
    arr[0][i] = 1;
  }
  for (let j = 0; j < h; j++) {
    arr[j][0] = 1;
  }

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[0].length; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }

  answer = arr[arr.length - 1][arr[0].length - 1];
  return answer;
};

console.log(solution(width, height));
