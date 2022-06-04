var threeSumMulti = function (A, target) {
  const seen = {};
  let tuples = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      const total = A[i] + A[j];
      if (seen[target - total]) tuples += seen[target - total];
    }

    if (!seen[A[i]]) seen[A[i]] = 0;

    seen[A[i]]++;
  }

  return tuples % (Math.pow(10, 9) + 7);
};
