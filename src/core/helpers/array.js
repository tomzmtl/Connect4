export default null;


export const shallowEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


export const arraySum = (arr1, arr2) => arr1.map((n, i) => n + arr2[i]);
