const fs = require("fs");
const path = require("path");

var data = JSON.parse(
  fs.readFileSync("./src/json-manipulation/data.json", "utf8")
);
var electronic = data.filter((item) => {
  return item.type === "electronic";
});

console.log(electronic);
