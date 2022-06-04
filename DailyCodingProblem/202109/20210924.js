/*
cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

Implement car and cdr.
*/

function cons(a, b) {
  const pair = (f) => {
    return f(a, b);
  };
  return pair;
}
function car(pair) {
  const f = (a, b) => {
    return a;
  };
  return pair(f);
}
function cdr(pair) {
  const f = (a, b) => {
    return b;
  };
  return pair(f);
}
console.log(cons(3, 4));
console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));
