function leap(a, b) {
  output = [];
  for (let i = a; i <= b; i += 4) {
    output.push(i);
  }
  console.log(output.toString());
}
leap(0, 15);
