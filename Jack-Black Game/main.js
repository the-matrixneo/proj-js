
let playerobject = { //object
    name : "daky", 
    chips : 145 
}
 
let cards= []
let sum = 0
let hasBlackJack = false //bollean value
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el") 
let cardsEl = document.querySelector("#caed-el")


let playerEl = document.getElementbyid(player-el)
playerEl.textcontent = player.name + ":" + "$" + player.chips 
function getrandomcard(){
let randomnumber = Math.floor(Math.random()*13) +1 
    return randomnumber
    if(randomnumber === 1){
        return 11
    }
    else if (randomnumber > 10){
        return 10}
        else {
            return randomnumber
        }
    }


function startGame() {
    let firstCard = getrandomnumber()
    let secondcard = getrandomnumber()
    cards = [firstcard + secondcard]
    sum = firstCard + secondcard 

            renderGame()
}
function rendergame(){
    cardsEl.textcontent = "cards:"
    for(i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + ""
    }
}


// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function renderGame(){
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}
messageEl.textcontent = message

function newCard() {
    // 3. Use the getRandomCard() to set the value of card
    let card = getrandomcard()
   sum += card
   card.push(card)
   console.log(cards)
   renderGame()

}

sumEl.textcontent = "sum:" + sum
cardsEl.textcontent = "Cards:" + cards[0] + cards[1]+ card;
}
function newcard()
{
    if(isAlive === true && hasBlackJack === false)
        {
   cards.push(newcard)
    console.log("drawing new card from deck")
    renderGame()
}
} 



        