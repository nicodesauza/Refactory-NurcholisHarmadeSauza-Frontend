function fib(n) {
  if (n == 0) return 0;
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function deretFib(a, b) {
  let deret = [];
  for (i = a; i < b; i++) {
    deret.push(fib(i));
  }
  return Number(deret.join(""));
}

function findNear(value) {
  let i = 0;
  let looping = true;
  while (looping) {
    i++;
    if (
      Math.abs(deretFib(i - 1, i) - value) <
      Math.abs(deretFib(i, i + 1) - value)
    ) {
      looping = false;
      console.log(deretFib(i - 1, i) - value);
    }
  }
}

function total(input) {
  let sum = 0;
  input.map((item) => {
    sum += item;
  });
  return sum;
}

input = [15, 1, 3];
arr = total(input);

findNear(arr);
