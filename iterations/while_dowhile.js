// while (condition) {

// }
let arr = ["lolo", "momo", "bebo"];
let arraaay = 0;
// while (arraaay < arr.length) {
//   console.log("my array printed");
//   arraaay = arraaay + 1;
// }
////
let kms = 11;
do {
  console.log(`run ${kms} kilometers`);
  kms++;
} while (kms <= 10);
// console.log()
// higher order array loop
//
const num = [2, 4, 6, 8, 10];
for (const num of arr) {
  console.log(num);
}
// forin
const greet = "hello world";
for (const char of greet) {
  console.log(`each greeting os ${greet}`);
}
//maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United state of nations");
map.set("Fr", "France");
map.set("Pak", "Pakistan");
// console.log(map);
// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// } //not ittertable
//object - forin
const myObject = {
  game1: "BGMI",
  game2: "Free Fire",
  game3: "Nogo",
};
// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }
for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}
//  array -forof
const programming = ["js", "cpp", "py", "java", "c"];
for (const key in programming) {
  console.log(programming[key]);
}
