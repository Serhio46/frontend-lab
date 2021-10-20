import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import randomCocktailReducer from './randomCocktailReducer'

const rootReducer = combineReducers({
	modalReducer,
	randomCocktailReducer,
});

export default rootReducer;