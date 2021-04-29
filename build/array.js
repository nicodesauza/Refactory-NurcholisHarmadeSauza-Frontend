"use strict";
//numeric enum
var Month;
(function (Month) {
    Month[Month["Jan"] = 1] = "Jan";
    Month[Month["Feb"] = 2] = "Feb";
    Month[Month["Mar"] = 3] = "Mar";
    Month[Month["Apr"] = 4] = "Apr";
    Month[Month["May"] = 5] = "May";
})(Month || (Month = {}));
// console.log(Month[1])
//string enum
var Bulan;
(function (Bulan) {
    Bulan[Bulan["Jan"] = 0] = "Jan";
    Bulan[Bulan["Apr"] = 1] = "Apr";
    Bulan["Feb"] = "februari";
    Bulan["Mar"] = "maret";
})(Bulan || (Bulan = {}));
console.log(Bulan);
