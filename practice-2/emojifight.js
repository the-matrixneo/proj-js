let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {

    let randomfighterone= Math.floor(Math.random()*fighters.length)
    let randomfightertwo= Math.floor(Math.random()*fighters.length)
    return fighters[randomfighter]
    stageEl.textContent = fighters[randomfighterone] + `VS ` + fighters[randomfightertwo]

})
