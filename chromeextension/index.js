let myLeads = []
const store = JSON.parse(localStorage.getItem("myLeads"))
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const tabbtn = document.getElementById("tab-btn")

//myLeads = JSON.parse(localStorage.getItem(myLeads)) //convert string into array
//myLeads.push("www.epiclead.com") //  add new array
 //myLeads = JSON.stringify(localStorage.getItem(myLeads))/ //array into sting /add new item to array

    if (store){
        myLeads =store
        render(myLeads)
    }
    tabbtn.addEventListener("click" , function(){
        chrome.tabs.query({active : true ,  currentWindow : true}, function(tabs) {
        myLeads.push(tabs[0].url)
         localstorage.setitem("myLeads" , JSON.stringify(myLeads))    
         render(myLeads)
      })
    })
    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    
        function render( leads){
        let listItems = ""
       for (let i = 0; i < leads.length; i++) {
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
  deletebtn.addEventListener("dbclick" , function(){
    localStorage.clear()
    myLeads =[]
   render(myLeads)

   })
    
 
//localStorage.setItem("Leads","ul-el") //localstorage.setItem("key","value")
//localStorage.getItem("Leads") //localstorage.getvalue("key") --string 
//localStorage.clear() //localstorage.clear() to clear the local storage 

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "" // clear input field
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    
})



  

