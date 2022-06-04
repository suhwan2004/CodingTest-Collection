var suggestedProducts = function (products, searchWord) {
  let res = [];
  products.sort();

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
