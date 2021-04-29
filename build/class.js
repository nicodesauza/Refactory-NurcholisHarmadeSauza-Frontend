"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Client = void 0;
/////// Class Dasar
var Client = /** @class */ (function () {
    function Client(name) {
        this.name = name;
    }
    return Client;
}());
exports.Client = Client;
var client = new Client("nico");
// console.log(client.name)
/////// inheritence pada class (class turunan)
var User = /** @class */ (function () {
    function User(name) {
        var _this = this;
        this.getName = function () { return _this.name; };
        this.name = name;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    return User;
}());
exports.User = User;
// public = bisa diakses di semua class atau dari luar class
// protected =  hanya bisa diakses dari class tersebut atau turunannya
// private = hanya bisa diakses dari class itu sendiri
// *misal, user terdiri dari 2 role yaitu admin dan member. admin dapat melakukan edit dan lain2 sedangkan member hanya dapat membaca saja
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, phone) {
        var _this = _super.call(this, name) || this;
        _this.read = true;
        _this.write = true;
        _this.email = "";
        _this.phone = phone;
        return _this;
    }
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    Object.defineProperty(Admin.prototype, "_email", {
        get: function () {
            return this.email;
        },
        set: function (value) {
            this.email = value;
        },
        enumerable: false,
        configurable: true
    });
    return Admin;
}(User));
var admin = new Admin("andika", "085784329");
// console.log(admin.phone)
// console.log(admin.name)
// admin.setName("devi");
// console.log(admin.getName())
// console.log(admin.getRole().read)
admin._email = "nicosauza@gmail.com";
console.log(admin._email);
