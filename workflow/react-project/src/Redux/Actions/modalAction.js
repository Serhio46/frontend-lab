export const showModal = () => ({
	type: 'SHOW-MODAL'
})

export const closeModal = () => ({
	type: 'CLOSE-MODAL'
})

export const setAuth = (payload) => ({
	type: 'SET_AUTH',
	payload,
})

export const openAuth = (payload) => async (dispatch) => {
	await dispatch(setAuth(payload));
	dispatch(showModal());
}

export const closeAuth = (payload) => async (dispatch) => {
	await dispatch(closeModal());
	dispatch(setAuth(payload));
}
