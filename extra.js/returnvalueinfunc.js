let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}
function gettotalracetime(){
    return player1Time + player2Time 
}
gettotalracetime()
let returnvalue = gettotalracetime()
console.log(returnvalue)