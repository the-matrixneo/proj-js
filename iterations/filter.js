const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
const userbooks = books.filter((bk) => bk.genre === "History");
console.log(userbooks);
let newbooks = books.map((bk) => {
  return bk.publish >= 2000;
});
console.log(newbooks);
// map , chain
const num = [1, 2, 3, 4, 5];
const num1 = num
  .map((num) => num * 10)
  .map((num) => num + 3)
  .filter((num) => num >= 40);
/////Reduce method ///
const array = [1, 2, 3, 4];
const initialvalue = 0;
const Initial = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialvalue
);
console.log(sumWithInitial);
const nums = [1, 2, 3, 4, 5];
const mynum = nums.reduce((acc, currval) => acc + currval, 0);
console.log(mynum);
