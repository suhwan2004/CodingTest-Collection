/*
This problem was asked by Google.

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.
*/

function solution() {
  let point_inside_circle = 0;
  let point_outside_circle = 0;

  for (let i = 0; i < 100000; i++) {
    let x = Math.random();
    let y = Math.random();
    if (x ** 2 + y ** 2 < 1) point_inside_circle += 1;
  }
  return (point_inside_circle / 100000) * 4;
}

console.log(solution());
