let number = [];
for (let i = 0; i <= 1000; i++) {
  number.push(i);
}
const even = number.filter((v) => v % 2 === 0);
const odd = number.filter((v) => v % 2 === 1);
const multiplefive = number.map((v) => v * 5);

// prime number

const isPrime = (n) => {
  if (n === 1 || n === 0) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
};
const filterPrime = (arr) => {
  const filtered = arr.filter((v) => isPrime(v));
  return filtered;
};

// prime number less than 100
const numberLessAHundred = number.filter((v) => v <= 100);
const filterPrimeLessHundred = (arr) => {
  const filtered = arr.filter((v) => isPrime(v));
  return filtered;
};

console.log("even => " + even + "\n");
console.log("odd => " + odd + "\n");
console.log("multiple by five => " + multiplefive + "\n");
console.log("prime number => " + filterPrime(number) + "\n");
console.log(
  "prime numbers less than 100 => " + filterPrimeLessHundred(numberLessAHundred)
);
