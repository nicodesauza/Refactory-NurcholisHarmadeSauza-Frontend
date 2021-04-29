"use strict";
// dengan adanya interface kita dapat meng-inject sebuah class dengan class lain
var Store = /** @class */ (function () {
    function Store() {
        this.name = 'Store A';
        this.profit = 1000;
    }
    Store.prototype.getName = function () {
        return this.name;
    };
    Store.prototype.getProfit = function () {
        return this.profit;
    };
    return Store;
}());
var FashionProduct = /** @class */ (function () {
    function FashionProduct(name, price, store) {
        this.name = name;
        this.price = price;
        this.store = store;
    }
    FashionProduct.prototype.sell = function () {
        console.log(this.name + " punya price " + this.price + ", harga jualnya " + (this.store.getProfit() + this.price));
        return 'yes';
    };
    return FashionProduct;
}());
var test = new FashionProduct('buah', 3000, new Store);
var TokoLama = /** @class */ (function () {
    function TokoLama(store) {
        this.age = 20;
        this.name = 'toko lama';
        this.profit = 1000;
        this.store = store;
    }
    TokoLama.prototype.getProfit = function () {
        return this.profit;
    };
    TokoLama.prototype.getStore = function () {
        return this.store;
    };
    return TokoLama;
}());
var TokoBaru = /** @class */ (function () {
    function TokoBaru() {
        this.name = 'toko baru';
        this.profit = 4000;
    }
    TokoBaru.prototype.getProfit = function () {
        return this.profit;
    };
    return TokoBaru;
}());
var Hijab = /** @class */ (function () {
    function Hijab(name, profit, store) {
        this.name = name;
        this.profit = profit;
        this.store = store;
    }
    Hijab.prototype.sell = function () {
        console.log(this.name + " harga jual ke pelanggan adalah " + (this.profit + this.store.getProfit()));
    };
    Hijab.prototype.printStore = function () {
        console.log(this.store);
    };
    return Hijab;
}());
var a = new Hijab('biru', 20000, new TokoBaru);
var b = new Hijab('biru', 20000, new TokoLama(new TokoLama(new TokoLama(new TokoBaru))));
function identity(arg) {
    var a = arg.map(function (item) { return 'oi'; });
    return a;
}
var myIdentity = identity([1, 2, 3]);
console.log(myIdentity);
