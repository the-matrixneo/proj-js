const person = {
  name: "Dakshata", //: left side is called key
  city: "delhi",
  favfood: "momo",
  wantmomorightnow: true,
  numberofmomowanted: 4,
};
//const propertyname = "name";
console.log(person["name"]);

let airbnbcastle = {
  name: "castle",
  location: true,
  price: 300,
  array: [1, 2, 3, 4],
};
console.log(airbnbcastle.name);
///////////////////////////
// sigelton;
// Object.create
//Important;
const sym = Symbol("sym1");
const user = {
  [sym]: "sym1", //to refer symbol
};
console.log(typeof [sym]);

person.greetning = function () {
  console.log(`namaste js  ${this.city}`); //for refrence
};
console.log(person.greetning); //[Function (anonymous)]
console.log(person.greetning()); //undefined

Object.freeze(person);
person.name = "ddaayy@123";
console.log(person);
