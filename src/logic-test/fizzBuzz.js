function fizzBuzz(n) {
  let arr = [];
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  console.log(arr.join(","));
}
fizzBuzz(20);
