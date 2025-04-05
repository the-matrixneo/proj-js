const recipient = "jamuna";
const sender = "papajii";
const email = ` hey
 ${recipient}  
 ! how it is going ? cheers janumaji 
 ${sender}`;
console.log(email);
//////////////////////////////
const name = "lolo";
const Count = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my  count is ${Count}`);

const gameName = new String("lolo-lo-com");

console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); values returns this string converted to uppercase.
console.log(gameName.charAt(2)); //values returns a new string consisting of the single UTF-16 code unit at the given index.

console.log(gameName.indexOf("c"));

const newString = gameName.substring(0, 4); //returns the part of this string from the start index up to and excluding the end index,
console.log(newString);

const anotherString = gameName.slice(-8, 4); //The slice() method of String values extracts a section of this string and returns it as a new string
console.log(anotherString);

const newStringOne = "   lolo    ";
console.log(newStringOne);
console.log(newStringOne.trim()); //values removes whitespace from both ends of this string

const url = "https://lolo.com/lolo%20momo";

console.log(url.replace("%20", "-")); //values returns a new string with one, some, or all matches of a pattern replaced by a replacement

console.log(url.includes("sundar")); // values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false

console.log(gameName.split("-")); //takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
