const initialState = {
	auth: false,
	visible: false,
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
		default:
			return state;
	}
}

export default modalReducer;