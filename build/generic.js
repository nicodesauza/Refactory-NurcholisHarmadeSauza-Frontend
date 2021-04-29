"use strict";
/// apa itu generic function?
function getData(value) {
    return value;
}
// console.log(getData("nico").length)
// console.log(getData(1234).length) ///// nah, disini harusnya error tapi typescript ga baca kalo ini error. maka gunakan generic
// generic 
function getNama(value) {
    return value;
}
// console.log(getNama("nico").length)
// console.log(getNama(123).length) ///// disini sudah kelihatan errornya
// generic arrow function
var getName = function (value) { return value; };
console.log(getName(123).length);
