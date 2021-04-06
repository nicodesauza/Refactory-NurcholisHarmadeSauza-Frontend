const numbers = [9, 4, 2, 4, 1, 5, 3, 0];
// sort_odd(numbers)
const isOdd = (n) => {
  if (n % 2 === 1) {
    return true;
  }
  return false;
};
const filterOdd = (arr) => {
  const filtered = arr.filter((v) => isOdd(v));
  console.log(filtered);
};

isOdd(numbers);
