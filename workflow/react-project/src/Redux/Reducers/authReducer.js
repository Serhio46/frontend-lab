const intialState = {
	isAuth: false,
	error: '',
	isLoading: false,
	user: {}
}

const authReducer = (state = intialState, action) => {
	switch (action.type) {
		case "SET_IS_AUTH":
			return {
				...state,
				isAuth: action.payload,
				isLoading: false
			};
		case "SET_USER":
			return {
				...state,
				user: action.payload
			}
		default:
			return state;
	}
}

export default authReducer;