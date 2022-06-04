/*Given a pivot x, and a list lst, partition the list into three parts.

The first part contains all elements in lst that are less than x
The second part contains all elements in lst that are equal to x
The third part contains all elements in lst that are larger than x
Ordering within a part can be arbitrary.

For example, given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], one partition may be [9, 3, 5, 10, 10, 12, 14].
*/

/*
Bruthe Solution
Time : O(NlogN)
Space : O(1)
ALGO : Sort
Using Sort


Optimal Solution
Time : O(N)
Space : O(N)
Create new Array



Best Optimal Solution
Time : O(N)
Space : O(1)
ALG : Two pointer...

*/
function BruthSolution(x, lst) {
  return lst.sort((a, b) => a - b);
}

function Optimal(x, lst) {
  let arr1 = [],
    arr2 = [],
    arr3 = [];

  for (let i of lst) {
    if (i === x) arr2.push(i);
    else if (i > x) arr3.push(i);
    else arr1.push(i);
  }

  return [...arr1, ...arr2, ...arr3];
}

function BestOptimal(x, lst) {
  let i = 0,
    j = 0,
    k = lst.length - 1;

  while (j < k) {
    if (lst[j] === x) j++;
    else if (lst[j] < x) {
      [lst[i], lst[j]] = [lst[j], lst[i]];
      i++, j++;
    } else {
      [lst[j], lst[k]] = [lst[k], lst[j]];
      k--;
    }
    console.log(lst);
  }

  return lst;
}

//console.log(BruthSolution(10, [9, 12, 3, 5, 14, 10, 10]));
//console.log(Optimal(10, [9, 12, 3, 5, 14, 10, 10]));
console.log(BestOptimal(10, [9, 12, 3, 5, 14, 10, 10]));
