let myLeads = []
const inputEl = document.getElementById("input-el")

//grab the whole id
const inputbtn = document.getElementById("input-btn")
inputbtn.addEventListener("click", function(){
    myLeads.push(inputEl.value) //get input from inputfield 
    console.log("button clicked!!")
})