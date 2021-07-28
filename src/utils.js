export const pairwise = (arr) => {
  let i = 0;
  const pairedArray = [];
  while (i < arr.length) {
    pairedArray.push([arr[i], arr[i + 1]]);
    i += 2;
  }
  return pairedArray;
};
