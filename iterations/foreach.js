const coding = ["js", "py", "java", "cpp", "c"];
coding.forEach(function (item) {
  // console.log(item);
});
// arrow function
coding.forEach((val) => {
  console.log(val);
});
//printme
function printMe(item) {
  // console.log(item);
}
coding.forEach(printMe); // only refrence of function  not calling

coding.forEach((item, index, array) => {
  // console.log(item, index, array);
});
const myCoding = [
  { languageName: "java", filename: "java" },
  {
    languageName: "python",
    filename: "py",
  },
  {
    languageName: "cpp",
    filename: "cpp",
  },
];
coding.forEach((item) => {
  // console.log(item.languageName);
});
const myNum = [1, 2, 3, 4, 5, 6, 7];

const newnum = [];
myNum.forEach((num) => {
  if (num > 5) {
    newnum.push(num);
  }
});
console.log(newnum);
////////shopping cart ///////////////
const ShoppingCart = [
  {
    itemname: "js course",
    price: 2999,
  },
  {
    itemname: "data science  course",
    price: 12999,
  },
  {
    itemname: "webdev course course",
    price: 1999,
  },
  {
    itemname: "android course",
    price: 6999,
  },
];
const checkout = ShoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(checkout);
