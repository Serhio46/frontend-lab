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
	console.log(responce);
	dispatch(setIsAuth(true));
	dispatch(setUser(user));
	dispatch(closeAuth(false));
}

export const signIn = (user) => async (dispatch) => {
	console.log('in')
	const responce = await axios.post(`${BASE_URL}/sign-in`, user);
	console.log(responce)
}