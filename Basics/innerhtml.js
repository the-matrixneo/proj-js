
const container = document.getelementbyid("container")
container.innerHTML = <button onclick='buy()'> + "Buy!" + </button>
 function buy(){
    container.innerhtml += "<p>Thank you for Buying!<p>"
}