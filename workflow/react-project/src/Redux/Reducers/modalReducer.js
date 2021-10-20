const initialState = {
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
			}
		default:
			return state;
	}
}

export default modalReducer;