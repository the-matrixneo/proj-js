function getFirst(arr) {
  return arr[0];
}
console.log(getFirst([1, 2, 3]));
// array can also be passaed as parameter
// spread - concat two arrays
const char1 = ["ddlj", "soty", "harrypotter"];
const char2 = ["me", "you", "who"];
const char3 = [...char1, ...char2]; //spread method
console.log(char3);
//flat - returns the new array of substring
const num1 = [1, 2, 3, [8, 7, 6, [0, 9]]];
const num2 = num1.flat(Infinity);
console.log(num2);
//important
console.log(Array.isArray("Duck"));
console.log(Array.from("Duck"));
console.log(Array.from({ name: "Duck" })); // returns the empty array , can't convert directly

const grade2 = 3;
const grade3 = 4;
const grade1 = 7;
console.log(Array.of(grade1, grade2, grade3)); //returnsnew array from setof elements
