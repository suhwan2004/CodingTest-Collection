/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function (nestedList) {
  let max = 1;
  let sum = 0;
  for (let cur of nestedList) {
    if (!cur.isInteger()) firstDfs(cur.getList(), 1);
  }

  for (let cur of nestedList) {
    if (!cur.isInteger()) secondDfs(cur.getList(), 0);
    else sum += max * cur.getInteger();
  }
  return sum;

  function firstDfs(arr, dep) {
    dep++;
    max = Math.max(dep, max);
    for (let cur of arr) {
      if (!cur.isInteger()) firstDfs(cur.getList(), dep);
    }
  }
  function secondDfs(arr, dep) {
    dep++;
    for (let cur of arr) {
      if (!cur.isInteger()) secondDfs(cur.getList(), dep);
      else sum += cur.getInteger() * (max - dep);
    }
  }
};
