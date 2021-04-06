let str = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`;

function countWords(word) {
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");
  str = str.replace(/\n /, "\n");
  return str.split(word).length - 1;
}

console.log("Jumlah Kata 'aku' = " + countWords(/aku/i));
console.log("Jumlah Kata 'ingin' = " + countWords(/ingin/i));
console.log("Jumlah Kata 'dapat' = " + countWords(/dapat/i));
// const cari = str.search(/aku/i);
// console.log(cari);
