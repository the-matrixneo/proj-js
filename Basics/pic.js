const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
const container = document.getElementById("container")

function images(){
     for(let i =0; i<imgs.length; i++){
      container.innerhtml += `<img class = "team-img" src = "${imgs[i]}">`
     }
     renderimages()
}