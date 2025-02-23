let randomNumber = Math.random() *6
//includes 0 to 1, but does not include 1
console.log(randomNumber)

let floorednumber = Math.floor(9.4567)
console.log(floorednumber) // removes the digits after decimal
let randomnumber = Math.floor(Math.random()*6) +1
console.log(randomnumber)

function rolldice(){
    let randomnumber = Math.floor(Math.random()*5)+2
    return randomnumber
}
console.log(rolldice())