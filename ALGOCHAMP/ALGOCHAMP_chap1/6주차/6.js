//8:14 ~ 58
//44분 ㅂㄷㅂㄷ
/*

     i 포인터, j포인터         
     i = 0번째 인덱스 , j = 6번째 인덱스?        
     8,0,0,5,0,0,10,0,0,1,1,0,3  = >  0을 다세고 7이나옴. 7
     7,0,0,4,0,0,9 ,0,0,0,0,0,2  =>  9개 16
     6 0 0 3 0 0 8  0 0 0 0 0 1  =>  9개  25
     5 0 0 2 0 0 7  0 0 0 0 0 0  =>  4개 29
     4 0 0 1 0 0 6     => 4개 33
     3 0 0 0 0 0 5    => 5개 38
     2 0 0 0 0 0 4    => 5개 43
     1 0 0 0 0 0 3 => 5개 48
     0 0 0 0 0 0 2 => i == j 만나는 순간에는 종료.

     input : int array
     output : int 결과값.
     constraints : 요소가 0보다 커야됨. 길이가 0이면 안됨. 
     edge case : 다 0일때는 바로 0리턴.
     

     algo : for
     ds  : array
     time : O(n*maxHeight)
     space : O(1)

     solution

     1.가장 끝단의 right, left 포인터를 저장. 그리고 앞으로 for을 돌릴 때는 그걸 시작과 끝으로 두고 돌림. start = right + 1 ; start <left ; start++
     2. 0인 것들이 보일때마다 카운트를 시켜줍니다. 그리고 그 과정이 다 끝나면 0이 아닌 값들을 다 줄입니다.
     3. 여기서 다음 for로 가기 전에 if를 거쳐서
     if(arr[left] == 0 ){} , if(arr[right] == 0){} 반복문을 안에서 돌아서 정수를 찾자.
     4.계속 더하다가 left와 right의 값이 같아지는 순간 break;

*/
const height = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3];

const solution = (height) => {
  let left = -1;
  let right = -1;
  for (let i = 0; i < height.length; i++) {
    if (left == -1) {
      if (height[i] != 0) left = i;
    }
    if (right == -1) {
      if (height[height.length - 1 - i] != 0) right = height.length - 1 - i;
    }
  }
  if (left == right) return 0;

  let count = 0;

  for (let start = left; start <= right; start++) {
    if (height[start] == 0) count++;
    else height[start] = height[start] - 1;

    if (start == right) {
      //left가 0일때, right가 0일때, 만약에 둘다 0이 아니라면 그냥 다시 초기화를 시켜줘야 됩니다.start를 left + 1으로.
      console.log(height);

      if (height[left] == 0) {
        for (let j = 0; j < height.length; j++) {
          if (height[j] > 0) {
            left = j;
            break;
          }
        }
        if (height[left] == 0) break;
      }
      if (height[right] == 0) {
        for (let j = 0; j < height.length; j++) {
          if (height[height.length - 1 - j] > 0) {
            right = height.length - 1 - j;
            break;
          }
        }
        if (height[right] == 0) break;
      }

      if (left == right || (height[left] == 0 && height[right] == 0)) {
        break;
      }

      start = left - 1;
    }
  }
  return count;
};

console.log(solution(height));
