/*
Input : int 2D Array(image), 2 int(x, y)
Output : int(the area of the smallest (axis-aligned) rectangle that encloses all black pixels)
Contraints : 
 - m == image.length
 - n == image[i].length
 - 1 <= m, n <= 100
 - image[i][j] is either '0' or '1'.
 - 0 <= x < m
 - 0 <= y < n
 - image[x][y] == '1'.
 - The black pixels in the image only form one component.
 - You must write an algorithm with less than O(mn) runtime complexity
E : 
*/

/*
Time : O(LogN)
Space : O(1)
ALGO : Binary Search
DS : Array
*/

var minArea = function (image, x, y) {
  let m = image.length,
    n = image[0].length;
  let left = colBinarySearch(0, y, 0, m, true);
  let right = colBinarySearch(y + 1, n, 0, m, false);
  let top = rowBinarySearch(0, x, left, right, true);
  let bottom = rowBinarySearch(x + 1, m, left, right, false);
  return (right - left) * (bottom - top);

  function colBinarySearch(i, j, t, d, flag) {
    while (i !== j) {
      let loc = t,
        mid = Math.floor((i + j) / 2);
      while (loc < d && image[loc][mid] == "0") ++loc;
      if (loc < d === flag) j = mid;
      else i = mid + 1;
    }
    return i;
  }

  function rowBinarySearch(i, j, l, r, flag) {
    while (i != j) {
      let loc = l,
        mid = Math.floor((i + j) / 2);
      while (loc < r && image[mid][loc] === "0") ++loc;
      if (loc < r === flag) j = mid;
      else i = mid + 1;
    }
    return i;
  }
};
