import axios from 'axios';


const BASE_URL = 'https://stdlab-api.herokuapp.com/api';

export const sortCocktailsBy = (sortBy) => ({
	type: 'SORT_COCKTAILS_BY',
	payload: sortBy,
});

export const filteredCocktails = (sortBy, search) => async (dispatch) => {
	const param = sortBy === 'drinkName' ? 's' : 'i';
	try {
		if (search) {
			const { data } = await axios.get(`${BASE_URL}/cocktails/search?${param}=${search}`, { headers: { "Authorization": `Bearer ${sessionStorage.getItem('jwtToken')}` } });
			const drinks = sortBy === 'drinkName' ? data.drinks : data.ingredients;
			const payload = drinks.map(drink => ({
				title: drink.strDrink || drink.strIngredient,
				imgPath: drink.strDrinkThumb || drink.strIngredientThumb,
				key: drink.idDrink || drink.idIngredient,
				alcoholic: drink.strAlcoholic || drink.strAlcohol,
			}));

			dispatch({ type: 'SET_SORT_COCKTAILS', payload });
		} else {
			dispatch({ type: 'SET_SORT_COCKTAILS', payload: [] });
		}
	} catch (error) {
		console.log(error);
		dispatch({ type: 'SET_SORT_COCKTAILS', payload: [] });
	}
}

