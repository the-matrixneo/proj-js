let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl= document.getElementById("ul-el")

//grab the whole id
const inputbtn = document.getElementById("input-btn")
inputbtn.addEventListener("click", function(){
    myLeads.push(inputEl.value) //get input from inputfield
    for(let i =0;i<myLeads.length;i++ ) {
       ulEl.textContent +=  myleads[i] + 
    }
   //ulEl.innerHTML += "<li>"+ "myLeads[i]" + "</li>" //addinto list in unorderd format 
   const li = document.getelementbyid ("li")
   li.textContent = myLeads[i]
   ulEl.append(li)
   //create element 
   // set text content
   // append to ul
})
 var listitems = document.getelementbyid("ul-el")
 let listitems =""
 for (let i =0; i<myleads.length; i++){
    listitems += "<li>"+ myLeads[i] + "</li>"

}
ulEl.innerhtml = listitems 