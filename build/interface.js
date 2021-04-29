"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Asus.prototype.on = function () {
        console.log("nyala");
    };
    Asus.prototype.off = function () {
        console.log("mati");
    };
    return Asus;
}());
var Macbook = /** @class */ (function () {
    function Macbook() {
        this.name = "Macbook";
        this.keyboardLight = true;
    }
    Macbook.prototype.on = function () {
        console.log("nyala");
    };
    Macbook.prototype.off = function () {
        console.log("mati");
    };
    return Macbook;
}());
var asus = new Asus('Asus', true);
console.log(asus.name);
