let score = "90abc"
let momo = null 
let cheese = undefined 
let bool = true
let conversion = Number(score) // not convert => Nan
let convo = Number(bool)
let con = Number (cheese)
let isLoggedIn = 0
let valueLoggedIn = Boolean(isLoggedIn)
console.log(valueLoggedIn) // 
// 1 => true 
// 0 => false 
// "" => false 
// "lolo" => false
// console.log(con) //Nan for undefined 
// console.log(convo) // return 1 for true (boolean)
// console.log(typeof conversion) //
// console.log(conversion) //Nan
// console.log(typeof undefined ) //undefined
// console.log(typeof momo)
// console.log(typeof bool)
