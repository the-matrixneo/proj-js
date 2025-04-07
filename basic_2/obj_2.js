const dog = {
  name: "tommyy",
  speak() {
    console.log("boww bowww");
  },
};

dog.speak();
//////////////// nesting of object
const bumble = {
  fullname: {
    username: {
      firstname: "lolo",
      lastname: "bebo",
    },
  },
};
console.log(bumble.fullname); //{ username: { firstname: 'lolo', lastname: 'bebo' } }
console.log(bumble.fullname.username.lastname);
//////////////////
// Object.assign =>
const obj1 = { 1: "w", 2: 3 };
const obj2 = { 3: "bebo", 4: 6 };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
// {} => source , obj1 , obj2 => target
obj4 = { ...obj1, ...obj2 }; // <= spread method same as array
console.log(obj4);
// Important
console.log(Object.keys(bumble)); //[ 'fullname' ] gives an array
console.log(Object.values(bumble));
