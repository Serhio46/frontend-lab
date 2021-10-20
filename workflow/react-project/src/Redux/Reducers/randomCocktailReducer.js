const initial = {
	title: 'Random Coctail',
	cocktail: {},
}

const randomCocktailReducer = (state = initial, action) => {
	if (action.type === 'GET-COCKTAIL') {

		const currentContentTitle = action.payload.strDrink;
		const currentImgPath = action.payload.strDrinkThumb;
		const currentInstruction = action.payload.strInstructions;
		const ingrQnty = getIngredients();
		const currentId = action.payload.idDrink;

		function getIngredients() {
			const ingredients = []
			for (let i = 1; i <= 15; i++) {
				const ingredient = `strIngredient${i}`;
				const quantity = `strMeasure${i}`;
				const ing = action.payload[ingredient];
				const qnty = action.payload[quantity];
				if (ing !== null) {
					if (qnty) {
						const qntyArr = qnty.split(' ');
						const ingrQnty = {
							ingredient: ing,
							quantity: qntyArr[0],
							unit: qntyArr[1],
							id: i,
						}
						ingredients.push(ingrQnty);
					} else {
						const ingrQnty = {
							ingredient: ing,
							quantity: null,
							unit: null,
							id: i,
						}
						ingredients.push(ingrQnty);
					}
				}
			}
			return ingredients;
		}

		const cocktail = {
			contentTitle: currentContentTitle,
			imgPath: currentImgPath,
			instruction: currentInstruction,
			ingrQnty: ingrQnty,
			id: currentId,
		}

		return {
			...state,
			cocktail: cocktail,
		}
	};
	return state;
}


export default randomCocktailReducer;