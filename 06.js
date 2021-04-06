const list_letters_first = ["c", "d", "g", "h"];
const list_letters_second = ["X", "Z"];

function findMissing(letter) {
  const value = letter.map((item) => {
    return item.charCodeAt(0);
  });
  for (let i = 0; i < value.length; i++) {
    let selisih = value[i] - value[i - 1];
    let missing = [];
    if (selisih > 1) {
      for (let j = 1; j < selisih; j++) {
        missing.push(String.fromCharCode(value[i] - j));
      }
      console.log(missing.reverse().toString(""));
    }
  }
}

findMissing(list_letters_first);
findMissing(list_letters_second);
