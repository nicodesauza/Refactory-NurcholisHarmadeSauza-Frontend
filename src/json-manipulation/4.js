const fs = require("fs");
const path = require("path");

var data = JSON.parse(
  fs.readFileSync("./src/json-manipulation/data.json", "utf8")
);

function filterPurchasedAt(data, dateString) {
  let arr = [];
  data.forEach((element) => {
    var date = new Date(element.purchased_at * 1000);
    if (date.toDateString() === dateString) {
      console.log(element);
    }
  });
  console.log(arr);
}

let date = "Thu Jan 16 2020";

filterPurchasedAt(data, date);
