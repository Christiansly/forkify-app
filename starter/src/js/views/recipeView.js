import icons from 'url:../../img/icons.svg'
import {Fraction} from 'fractional'

import View from './View';

class RecipeView extends View {
    _parentElement = document.querySelector('.recipe');
    
    _errorMessage = 'We could not find that recipe. Please try another one. Thanks'
    _message = ''

    
    addHandlerRender(handler) {
      ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler))
    }

    
    _generateRecipeList(ing) {
        return `<li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${icons}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${ing.quantity ? new Fraction(ing.quantity).toString() : ''}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${ing.unit}</span>
              ${ing.description}
            </div>
          </li>`
    }
}

export default new RecipeView()