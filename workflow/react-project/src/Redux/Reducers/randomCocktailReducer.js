const initial = {
	title: 'Random Cocktail',
	cocktail: {},
}

const randomCocktailReducer = (state = initial, action) => {
	if (action.type === 'GET-COCKTAIL') {

		const contentTitle = action.payload.strDrink;
		const imgPath = action.payload.strDrinkThumb;
		const instruction = action.payload.strInstructions;
		const ingredirntQuantity = getIngredients();

		function getIngredients() {
			const ingredients = []
			for (let i = 1; i <= 15; i++) {
				const ingredientKey = `strIngredient${i}`;
				const quantityKey = `strMeasure${i}`;
				const ingredient = action.payload[ingredientKey];
				const quantity = action.payload[quantityKey];
				if (ingredient && quantity) {
					const quantities = quantity.split(' ');
					const ingredirntQuantityItem = {
						ingredient: ingredient,
						quantity: quantities[0],
						unit: quantities[1],
						id: i,
					}
					ingredients.push(ingredirntQuantityItem);
				} else if (ingredient) {
					const ingredirntQuantityItem = {
						ingredient: ingredient,
						quantity: null,
						unit: null,
						id: i,
					}
					ingredients.push(ingredirntQuantityItem);
				}
			}
			return ingredients;
		}

		const cocktail = {
			contentTitle,
			imgPath,
			instruction,
			ingredirntQuantity,
		}

		return {
			...state,
			cocktail,
		}
	};
	return state;
}


export default randomCocktailReducer;