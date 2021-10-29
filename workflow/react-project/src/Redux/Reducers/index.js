import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import randomCocktailReducer from './randomCocktailReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
	modalReducer,
	randomCocktailReducer,
	authReducer,
});

export default rootReducer;