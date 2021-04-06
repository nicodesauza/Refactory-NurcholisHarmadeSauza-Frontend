const str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

function sensor(str, a, b, c, d, e, f, g) {
  let result = str
    .replace(a, bintang(a))
    .replace(b, bintang(b))
    .replace(c, bintang(c))
    .replace(d, bintang(d))
    .replace(e, bintang(e))
    .replace(f, bintang(f))
    .replace(g, bintang(g));
  console.log(result);
}
function bintang(word) {
  let b = "";
  for (var i = 0; i < word.length; i++) {
    b = b + "*";
  }
  return b;
}
sensor(str, "dolor", "elit", "quis", "nisi", "fugiat", "proident", "laborum");
