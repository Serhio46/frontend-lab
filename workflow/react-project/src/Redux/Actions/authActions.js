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

export const signUp = (user) => async (dispatch) => {
	const responce = await axios.post(`${BASE_URL}/sign-up`, user);
	dispatch(setIsAuth(true));
	dispatch(setUser(user));
	dispatch(closeAuth(false));
}

export const signIn = (user) => async (dispatch) => {
	const responce = await axios.post(`${BASE_URL}/sign-in`, user);
	const userData = { ...user };
	sessionStorage.setItem('jwtToken', responce.data.token);
	dispatch(setIsAuth(true));
	dispatch(setUser(userData));
	dispatch(closeAuth(false));
}
