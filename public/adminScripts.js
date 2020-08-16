
const addIngredient = document.querySelector('#add-ingredient')
const addStep = document.querySelector('#add-step')


addIngredient.addEventListener('click',()=>{
  const ingredients = document.querySelector(".ingredients");
  
  if(ingredients.lastElementChild.value == '') return false
  
  // ingredient != ingredients Caution ! ! ! !

  const ingredient = document.querySelectorAll("#ingredient")

  const newField = ingredient[0].cloneNode(true)
  
  ingredients.appendChild(newField)

  ingredients.lastElementChild.setAttribute('value','')

})

addStep.addEventListener('click',()=>{
  const steps = document.querySelector(".steps");
  
  if(steps.lastElementChild.value == '') return false
  
   // step != steps Caution ! ! ! !
  const step = document.querySelectorAll("#step")

  const newStep = step[0].cloneNode(true)
  
  steps.appendChild(newStep)

  steps.lastElementChild.setAttribute('value','')

})
