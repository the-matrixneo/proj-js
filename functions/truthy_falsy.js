// falsy value
// false , 0, -0 , BigInt 0n , "" , null , undefined , NaN
// truthy value
// "0" , 'false' , " " , [] , {} , function()
// if (Object.keys().length === 0) {
//   console.log("object is empty");
// }
//Nullish coalescing operator (??) : null undefined handeling error and null value
let num1;
num1 = null ?? 10;
console.log(num1); // output : 10
//Terniary oprator
// condition ? true : false;
const price = 100;
price <= 50 ? console.log("yes") : console.log("no");
