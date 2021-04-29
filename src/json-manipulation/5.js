const fs = require("fs");
const path = require("path");

var data = JSON.parse(
  fs.readFileSync("./src/json-manipulation/data.json", "utf8")
);
var brownColor = data.filter((item) => {
  return item.tags.filter((i) => {
    return i === "brown";
  });
});

console.log(brownColor);
