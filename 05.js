function bintang(word) {
  let b = "";
  for (var i = 0; i < word; i++) {
    b = b + "*";
  }
  return b;
}

function countChars(huruf, str) {
  let sum = str.toLowerCase().split(huruf).length - 1;
  let starCount = bintang(sum);
  return starCount;
}

function objectByArray(str) {
  let a = str.split("").filter((v) => v !== " ");
  let b = a.map((v) => v.toLowerCase());
  const unik = [...new Set(b)];
  var dict = {};
  for (let i = 0; i < unik.length; i++) {
    let key = unik[i];
    dict[key] = countChars(unik[i], str);
  }
  console.log(dict);
}

const text_1 = "Mammals";
const text_2 = "Bruiser build";

objectByArray(text_1);
objectByArray(text_2);
