let hands = [`rock`, `paper`, `scissors`]
function gethand(){
    let randomitem = Math.floor(Math.random()*3)
    return hands[randomitem]
}
console.log(gethand())
