import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import randomCocktailReducer from './randomCocktailReducer';
import authReducer from './authReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
	modalReducer,
	randomCocktailReducer,
	authReducer,
	filterReducer
});

export default rootReducer;