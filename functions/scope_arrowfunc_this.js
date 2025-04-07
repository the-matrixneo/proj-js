if (true) {
  const user = "lolo";
  if (user === "lolo") {
    console.log(user + "did it");
  }
  console.log(user);
}
// console.log(user); since user is not in global scope
console.log(bebe(5));
function bebe(num) {
  return num + 6;
}
// hosting but if this function was held in variable then hosting is not possible

////////////////---------arrowfunction-----///////////////
function choco() {
  let foo = "lolo";
  console.log(this.foo);
}
choco();
// output: undefined;

const foo = () => {
  const name = "jimmy";
  console.log(this.name);
};
foo();
// output : undefind
const addnum = (num1, num2) => num1 + num2; //this implicit returns the value
console.log(addnum(6, 5));
