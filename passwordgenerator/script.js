let character = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ";", "@", "!", "$", "%", "^"]
let passone = document.querySelector("#first-el");
let passtwo = document.querySelector("#second-el");
let generatebtn = document.querySelector("#btn");

function passgenerate() {
    let randomnum = Math.floor(Math.random() * character.length)
    return character[randomnum]
}
function generatepassword(passlength = 12) {
    let password = ''
    for (let i = 0; i < passlength; i++) {
        password += passgenerate()
    }
    return password;

}
function renderpass() {
    console.log("Button clicked! Generating passwords...");
    passone.textContent = generatepassword();
    passtwo.textContent = generatepassword();
}

