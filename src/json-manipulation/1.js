const fs = require("fs");
const path = require("path");

var data = JSON.parse(
  fs.readFileSync("./src/json-manipulation/data.json", "utf8")
);
var meeting = data.filter((item) => {
  return item.placement.name === "Meeting Room";
});

console.log(meeting);
