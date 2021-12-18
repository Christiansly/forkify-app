import * as model from './model.js'
import recipeView from './views/recipeView.js'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

const recipeContainer = document.querySelector('.recipe');




// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function() {
  try {
    const id = window.location.hash.slice(1)

    if(!id) return
    recipeView.renderSpinner()

    await model.loadRecipe(id)

    recipeView.render(model.state.recipe)
    
  }catch(err) {
    recipeView.renderError()
  }
}

const controlSearchResults = async function () {
  try {
    await model.loadSearchResults('pizza')
    console.log(model.state.search.results)
  } catch (err) {
    console.log(err)
  }
}


// controlSearchResults()
// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe))

// window.addEventListener('hashchange', showRecipe)
// window.addEventListener('load', showRecipe)

const init = function() {
  recipeView.addHandlerRender(showRecipe)
}

init()