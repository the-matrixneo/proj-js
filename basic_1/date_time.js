// console.log(new Date()); //date is the object
let myDate = new Date();
let myCreateDate = new Date("01-13-2025"); //mm-dd-yy
//let myTimeStamp = Date.now(); //quizes , polls , fastest ans.
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now() / 1000)); // converts into millisec
// console.log(myCreateDate.getTime()); //it will give time out of date
// console.log(myDate.getMonth());
console.log(myDate.getDay());
console.log(myCreateDate.toDateString()); //Mon Jan 13 2025
console.log(myCreateDate.toLocaleString()); //1/13/2025

newDate.toLocaleString("default", {
  weekday: "long",
  Date: "Number",
});
