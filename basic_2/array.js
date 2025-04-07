// array - ordered collection of values - composite/complex
// primitive data type - name(string), age(no), (boolean)

// let participation = [
//   " Hacktoberfest",
//   "SocialWinterofcode",
//   " csi",
//   " mitallumnicell",
// ];
// let education = [" btech", "rmediate", "ighschool"];
// let skills = ["c", "javascript", "html", "css"];
// console.log(skills[2]);
// let experience = [
//   "CEO at Scrimba",
//   "Frontend developer at Xeneta",
//   "People counter for Norstat",
// ];
// console.log(experience[1]);
// console.log(experience[2]);
// console.log(experience[0]); //zero indexed

// console.log(experience.length); //not zero indexed
// let name = ["dakshata"];
// let myage = [18];
// let isdeveloper = [true];
// let messages = [
//   "Hey, how's it going?",
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately.",
// ];
// console.log(messages[0]);
// console.log(messages[1]);
// console.log(messages[2]);
// console.log(messages[3]);

// let newMessage = "Same here!";
// messages.push(newMessage); //adds new array
// console.log(messages);

// messages.pop(); // removes the last element
// console.log(messages);
/////////////////////////////////////////////////
let myArray = [6, 8, 9, 0, 5];
myArray.unshift(99); //adds new array in starting

myArray.shift(); //removes value from start
const ar = myArray.join(); //converts array to string
console.log(ar);
// slice and splice
console.log("A ", myArray);

const myn1 = myArray.slice(1, 3); //3rd  index not included [8,9]

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1, 3); //C  [ 6, 5 ] gives back left value
console.log("C ", myArray);
console.log(myn2);
