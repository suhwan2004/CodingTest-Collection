/*
문제 접근하는 방식
1.길이부터 재봄.
2. k보다 길이기 작을 시는 하나씩 나누고, 나머지는 빈 배열을 추가로 넣어줌.
3. k보다 길이가 더 클 시에는 길이를 k만큼 나눔. 그리고, 나머지를 구하는데
4. 나머지가 있다면 길이를 저장한 배열에 1씩 추가로 더해줌.
5. 길이들을 저장한 배열을 참고해서 새로운 배열에 넣어준다.
*/
var splitListToParts = function (root, k) {
  let cur = root;
  let N = 0;

  while (cur != null) {
    cur = cur.next;
    N++;
  }

  const width = Math.floor(N / k),
    rem = N % k;

  let ans = new Array();
  cur = root; //for traversing whole link list

  for (let i = 0; i < k; ++i) {
    let head = cur;
    for (let j = 0; j < width + (i < rem ? 1 : 0) - 1; ++j) {
      if (cur != null) cur = cur.next;
    }

    if (cur != null) {
      let prev = cur;
      cur = cur.next;
      prev.next = null;
    }
    ans.push(head);
  }
  return ans;
};
