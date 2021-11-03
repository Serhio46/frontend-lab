import axios from 'axios';

const BASE_URL = 'https://stdlab-api.herokuapp.com/api';

export const loadRandomCocktail = () => async (dispatch) => {
	const { data } = await axios.get(`${BASE_URL}/cocktails/random`);
	dispatch({ type: 'GET-COCKTAIL', payload: data.drinks[0] });
}