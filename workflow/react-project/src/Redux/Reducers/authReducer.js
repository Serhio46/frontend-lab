const intialState = {
	isAuth: false,
	notification: {
		type: '',
		message: '',
	},
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
		case "SET_NOTIFICATION": {
			return {
				...state,
				notification: {
					type: action.payload.type,
					message: action.payload.message,
				}
			}
		}
		default:
			return state;
	}
}

export default authReducer;