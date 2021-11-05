const initialState = {
	initialCoctails: [],
	sortedCocktails: [],
	sortBy: 'drinkName',
	error: {
		type: '',
		message: '',
	},
}

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_SORT_COCKTAILS":
			return {
				...state,
				sortedCocktails: action.payload,
			};
		case "SORT_COCKTAILS_BY":
			return {
				...state,
				sortBy: action.payload,
			}
		case "SET_ERROR":
			return {
				...state,
				error: {
					type: action.payload.type,
					message: action.payload.message,
				}
			}
		case "SET_INITIAL":
			return {
				...state,
				initialCoctails: action.payload,
			}
		default:
			return state;
	}
}

export default filterReducer;