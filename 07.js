const numbers = [9, 4, 2, 4, 1, 5, 3, 0];
// sort_odd(numbers)
const isOdd = (n) => {
  if (n % 2 === 1) {
    return true;
  }
  return false;
};
const filterOdd = (arr) => {
  let filtered = arr.filter((v) => isOdd(v));
  filtered = filtered.sort((a, b) => {
    return a - b;
  });

  test = [];
  for (let i = 0; i < filtered.length; i++) {
    test.push(arr.indexOf(filtered[i]));
  }
  test = test.sort((a, b) => {
    return a - b;
  });

  arr.splice(test[0], 1, filtered[0]);

  for (let i = 0; i < test.length; i++) {
    arr[test[i]] = filtered[i];
  }

  console.log(test);
  console.log(filtered);
  console.log(arr);
};

filterOdd(numbers);
