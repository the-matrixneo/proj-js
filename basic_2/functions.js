function greet(firstname , lastname , greeting , nickname)
{return`${greeting} ${firstname} ${lastname} hey you can also be called as ${nickname}.`;}
console.log(greet("lolo" , "bebo", "supp","jojo"));
console.log(greet("hoho", "momo","suppy","gogo"));
function bark(){
    console.log("barkkk barkk");
}
bark()
const meow = function(){
    console.log("meeowww");
}
meow()
const chirp =() => {
    console.log("chirp chirp");
}
chirp()
let string ="hi my name is lolo";
string = string.substring(2,10);
console.log(string);