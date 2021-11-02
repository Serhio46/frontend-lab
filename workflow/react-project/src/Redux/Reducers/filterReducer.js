const initialState = {
	sortedCocktails: [],
	sortBy: '',
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
		default:
			return state;
	}
}

export default filterReducer;