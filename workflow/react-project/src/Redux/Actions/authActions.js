import axios from 'axios';
import { closeAuth } from './modalAction';

const BASE_URL = 'https://stdlab-api.herokuapp.com/api';

export const setIsAuth = (payload) => ({
	type: 'SET_IS_AUTH',
	payload
});

export const setUser = (user) => ({
	type: 'SET_USER',
	payload: user,
})

export const setNotification = (payload) => ({
	type: 'SET_NOTIFICATION',
	payload
})

export const signUp = (user) => async (dispatch) => {
	try {
		const responce = await axios.post(`${BASE_URL}/sign-up`, user);
		console.log(responce);
		dispatch(setIsAuth(true));
		dispatch(setUser(user));
		dispatch(closeAuth(false));
		dispatch(setNotification({
			type: 'success',
			message: "Account Created Successfully!"
		}));
	} catch (error) {
		console.log(error)
		dispatch(closeAuth(false));
		dispatch(setNotification({
			type: 'error',
			message: "Failed to create account!",
		}));
	}
}

export const signIn = (user) => async (dispatch) => {

	try {
		const responce = await axios.post(`${BASE_URL}/sign-in`, user);
		sessionStorage.setItem('jwtToken', responce.data.token);
		dispatch(setIsAuth(true));
		dispatch(setUser(user));
		await dispatch(closeAuth(false));
		dispatch(setNotification({
			type: 'success',
			message: "You are signin!"
		}));
	} catch (error) {
		console.log(error);
		dispatch(closeAuth(false));
		dispatch(setNotification({
			type: 'error',
			message: "Failed to signin account!"
		}));
	}
}
