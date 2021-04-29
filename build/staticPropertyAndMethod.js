"use strict";
/////////////// static property dan static method
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
exports.User = void 0;
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
    // static property
    Admin.getRoleName = "Admin"; //karena static maka dia tidak perlu masuk ke constructor terlebih dahulu
    Admin.getWell = function () { return "oi manga tu"; };
    return Admin;
}(User));
var admin = Admin.getWell();
console.log(admin);
// kenapa bisa terjadi seperti ini? karena kita tidak ada mengubah apa2 dari class admin tersebut. sehingga dengan tanpa dilakukan instansiasi atau ("new Admin"), kita bisa langsung akses.
