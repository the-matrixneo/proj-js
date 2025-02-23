let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "🙌"
]
for(let i =0; i<messages.length; i +=1){
    console.log(messages[i])
}
let card=[7,3,9]
for(let i=0; i<card.length; i+=1){
    console.log(card[i])
}
let sentence = ["Hello ", "my ", "name ", "is ", "dakshata"] 
let greetingEl = document.getElementById("greeting-el")
for(let i =0; i<sentence.length; i++){
    greetingEl.textContent = sentence[i] + " "
}