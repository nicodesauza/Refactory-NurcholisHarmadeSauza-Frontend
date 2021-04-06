const csvtojson = require("csvtojson");

const csvfilepath = "simple.csv";

function convert() {
  return csvtojson()
    .fromFile(csvfilepath)
    .then((json) => {
      return json;
    });
}
async function hasilAkhir() {
  const data = await convert();
  data.sort((a, b) => {
    if (Number(a.PRICE) < Number(b.PRICE)) return -1;
    if (Number(a.PRICE) > Number(b.PRICE)) return 1;
    return 0;
  });
  data.map((item) => {
    var bilangan = item.PRICE;
    item.PRICE = convertRupiah(bilangan, "Rp.");
  });
  console.log(data);
}

function convertRupiah(bilangan, prefix) {
  var number_string = bilangan.toString(),
    sisa = number_string.length % 3,
    rupiah = number_string.substr(0, sisa),
    ribuan = number_string.substr(sisa).match(/\d{3}/g);

  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }
  hasil = `${prefix} ${rupiah}, 00`;
  return hasil;
}

hasilAkhir();
