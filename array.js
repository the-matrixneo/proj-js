// array - ordered collection of values - composite/complex 
// primitive data type - name(string), age(no), (boolean)

let participation= [" Hacktoberfest" , "SocialWinterofcode" ," csi"," mitallumnicell"]
let education =[" btech" , "rmediate", "ighschool"]
let skills =["c","javascript","html","css"]
 console.log(skills[2]);
 let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]
console.log(experience[1]);
console.log(experience[2]);
console.log(experience[0]);//zero indexed 

console.log(experience.length);//not zero indexed 
let name =["dakshata"]
let myage = [18]
let isdeveloper = [true]
let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]
console.log(messages[0])
console.log(messages[1])
console.log(messages[2])
console.log(messages[3])

let newMessage = "Same here!"
messages.push(newMessage)
console.log(messages)
messages.pop() // removes the last element
console.log(messages)
