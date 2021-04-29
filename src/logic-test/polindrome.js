function polindrom(string) {
  stringReverse = string.toLowerCase().split("").reverse().join("");
  if (stringReverse === string.toLowerCase()) {
    return "polindrome";
  } else {
    return "not polindrom";
  }
}
console.log(polindrom("blblblb"));
