import axios from 'axios';

const BASE_URL = 'https://stdlab-api.herokuapp.com/api';

export const setLoading = payload => ({
	type: 'SET_ISLOADING',
	payload,
});

export const showCoctail = (cocktail) => ({
	type: 'GET-COCKTAIL',
	payload: cocktail
});

export const loadRandomCocktail = () => async (dispatch) => {
	dispatch(setLoading(true));
	const { data } = await axios.get(`${BASE_URL}/cocktails/random`);
	dispatch({ type: 'GET-COCKTAIL', payload: data.drinks[0] });
	dispatch(setLoading(false));
};


