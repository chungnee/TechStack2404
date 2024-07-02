function uniqueElements(A1, A2) {
  let uniqueA1 = [];
  let uniqueA2 = [];
  for (let i = 0; i < A1.length; i++) {
    if (A2.indexOf(A1[i]) === -1) {
      uniqueA1.push(A1[i]);
    }
  }
  for (let i = 0; i < A2.length; i++) {
    if (A1.indexOf(A2[i]) === -1) {
      uniqueA2.push(A2[i]);
    }
  }
  let uniqueArray = uniqueA1.concat(uniqueA2);
  return uniqueArray;
}
