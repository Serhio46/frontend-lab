import axios from 'axios';
const BASE_URL = 'https://stdlab-api.herokuapp.com/api';

const makeItemCard = (item) => ({
	title: item.strDrink || item.strIngredient,
	imgPath: item.strDrinkThumb || item.strIngredientThumb,
	key: item.idDrink || item.idIngredient,
	alcoholic: item.strAlcoholic || item.strAlcohol,
})

export const sortCocktailsBy = (sortBy) => ({
	type: 'SORT_COCKTAILS_BY',
	payload: sortBy,
});

export const setError = (payload) => ({
	type: 'SET_ERROR',
	payload
})

export const filteredCocktails = (sortBy, search) => async (dispatch) => {
	const param = sortBy === 'drinkName' ? 's' : 'i';
	try {
		if (search) {
			dispatch(setError({
				type: '',
				message: "",
			}
			));
			const { data } = await axios.get(`${BASE_URL}/cocktails/search?${param}=${search}`, {
				headers: {
					"Authorization": `Bearer ${sessionStorage.getItem('jwtToken')}`
				}
			});
			const drinks = sortBy === 'drinkName' ? data.drinks : data.ingredients;
			const payload = drinks.map(drink => makeItemCard(drink));
			dispatch({ type: 'SET_SORT_COCKTAILS', payload });
		} else {
			dispatch({ type: 'SET_SORT_COCKTAILS', payload: [] });
		}
	} catch (error) {
		dispatch(setError({
			type: 'error',
			message: "coudn't find anything",
		}
		));
		dispatch({ type: 'SET_SORT_COCKTAILS', payload: [] });
	}
}

