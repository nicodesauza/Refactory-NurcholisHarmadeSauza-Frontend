function reverse(words) {
  words = words.split("").reverse().join("");
  console.log(words);
}
// reverse("kamu kanapa");

function reverses(words) {
  words = words.toLowerCase().split(" ");
  result = [];

  words.map((item) => {
    a = item.split("").reverse().join("");
    b = a.charAt(0).toUpperCase() + a.slice(1);
    result.push(b);
  });
  result = result.join(" ");
  console.log(result);
}
reverses("Kadang Kala SeBuAh MisTeri");
