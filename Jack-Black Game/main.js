let firstCard = 10
let secondCard = 4
let card = 5 
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#caed-el")
function startGame() {
            renderGame()
}
function rendergame(){
    cardsEl.textcontent = "cards:"
    for(i=0; i<cards.length; i++){
        cardsEl.textContent = cards[i]
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

sumEl.textcontent = "sum:" + sum
cardsEl.textcontent = "Cards:" + cards[0] + cards[1]+ card;
}
function newcard()
{
   cards.push(newcard)
    console.log("drawing new card from deck")
    renderGame()
} 


