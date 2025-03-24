const searchbtn = document.querySelector('#submit') //for id
const submitbtn = document.querySelector('#search')
const recipecontainer = document.querySelector(".recipe-container")//for class
// function to get recipes
const fetchrecipes = async (recipes) => {
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipes}`)
  const response = await data.json()
  
  response.meals.forEach(meal => {
    //console.log(meal)
    const recipeDiv = document.createElement('div') //create a div in js
    recipeDiv.classList.add('recipe') // class in js
    recipeDiv.innerHTML  = `
    <img src ="${meal.strMealThumb}" alt =  `

  })
 } 
submitbtn.addEventListener('click', function(a){
  a.preventDefault()  //to prevent the default action of the form
  const searchinput = searchbtn.value.trim()
  fetchrecipes(searchinput)
  //console.log("search button clicked")
})

