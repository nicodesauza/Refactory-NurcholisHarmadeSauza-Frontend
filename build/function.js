"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullName = void 0;
function getName() {
    return 2 + "nd";
    // return "Helo my name is nico"
}
// console.log(getName())
///// function tanpa return (menggunakan tipe void) dan tidak boleh ada return
function printName() {
    console.log("oi" + 2);
}
// printName()
// function dengan argumen (number yang setelah argumen dibawah ini adalah tipe data hasil return ya)
function multiply(a, b) {
    return a * b;
}
var Add = function (a, b) { return a + b; };
// console.log(Add(5,2))
//////// function dengan default parameter
var fullName = function (first, last) {
    if (last === void 0) { last = "sauza"; }
    return first + " " + last;
};
exports.fullName = fullName;
//optional parameter
var getUmur = function (val1, val2) {
    return val1 + " " + val2;
};
// console.log(getUmur(1, "B"))
