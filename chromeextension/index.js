let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
localStorage.setItem("Leads","ul-el") //localstorage.setItem("key","value")
localStorage.getItem("Leads") //localstorage.getvalue("key") --string 
localStorage.clear() //localstorage.clear() to clear the local storage 

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "" // clear input field
    renderlead()
})


function renderlead(){
 let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
   // listItems += "<li><a target = '_blank'  href = ' " + myLeads[i] + " '>" + myLeads[i] + "</a></li>"
    //console.log(listItems)
    listItems += ` 
    <li> 
    <a target = '_blank' href =' ${myLeads[i]}' > ${myLeads[i]} 
    </a>
    </li>`
    console.log(listItems)
   

}
ulEl.innerHTML = listItems

    }
  

