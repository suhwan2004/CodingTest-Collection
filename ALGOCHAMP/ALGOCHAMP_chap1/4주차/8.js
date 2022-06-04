/*
sort, array, for...
O(nlogn) , O(n*m)
O(res);
*/

var suggestedProducts = function (products, searchWord) {
  let res = [];
  products.sort(); //처음에 사전식으로 정렬.

  for (let i = 0; i < searchWord.length; i++) {
    let arr = [];
    for (let j = 0; j < products.length; j++) {
      if (searchWord.substring(0, i + 1) == products[j].substring(0, i + 1))
        arr.push(products[j]);
      if (arr.length == 3) break;
    }
    res.push(arr);
  }
  return res;
};

console.log(
  suggestedProducts(
    ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
    "mouse"
  )
);
