const initialState = {
	auth: false,
	visible: false,
	showCard: false,
}

const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SHOW-MODAL':
			return {
				...state,
				visible: true,
			};
		case 'CLOSE-MODAL':
			return {
				...state,
				visible: false,
			};
		case 'SET_AUTH':
			return {
				...state,
				auth: action.payload,
			}
		case 'SET_SHOW_CARD':
			return {
				...state,
				showCard: action.payload,
			}
		default:
			return state;
	}
}

export default modalReducer;