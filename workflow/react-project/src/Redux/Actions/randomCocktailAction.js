import axios from 'axios';

const BASE_URL = 'https://stdlab-api.herokuapp.com/api';


export const fetchLoadCoctail = () => (dispatch) => {
	axios.get(`${BASE_URL}/cocktails/random`)
		.then(({ data }) => dispatch({ type: 'GET-COCKTAIL', payload: data.drinks[0] }));
}