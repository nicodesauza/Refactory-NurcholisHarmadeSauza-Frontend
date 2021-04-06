const fetch = require("node-fetch");

const users = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
const post = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
//   ssn: "123-456-2356",
// };
// let contact = {
//   phone: "408-989-8745",
//   email: "john.doe@example.com",
// };

// person.contact = contact;

// console.log(person);

let user = [
  { userid: 1, name: "sai" },
  { userid: 2, name: "King" },
  { userid: 4, name: "Slave" },
  { userid: 5, name: "Quen" },
];
let kontak = [
  { id: 4, age: 23 },
  { id: 5, age: 24 },
  { id: 6, age: 25 },
  { id: 7, age: 26 },
];

// user = user.map((item) => item.userid * 10);
// console.log(user);

function sambung(user, kontak) {
  //   console.log(kontak[1].id);
  user = user.map((item, i) => {
    // if ((item.userid = kontak[i].id)) {
    //   //   item.kontakk = kontak[i];

    //   //   //merging two objects
    //   //   //   return Object.assign({}, item, arr2[i]);
    //   //   console.log("oi");
    //   //   return item + "hai";
    //   return item.userid;
    // } else {
    // }
    return item.userid * 5;
  });
  console.log(user);
}

// sambung(user, kontak);
