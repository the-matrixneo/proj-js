const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
const container = document.getElementById("container")

function images(){
    let imgdom = ""
     for(let i =0; i<imgs.length; i++){
     // container.innerhtml += `<img class = "team-img" src = "${imgs[i]}">`
     imgdom = `<img  alt = "singers" class = "team-img" src = "${imgs[i]}">` // improve performance using concatenation
     }
     renderimage()
     container.innerhtml = imgdom
}