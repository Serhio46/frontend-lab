import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNotification } from '../Redux/Actions/authActions';

import Content from '../components/Content';
import AuthToast from '../components/AuthToast';


function Home() {

	const { type } = useSelector(({ authReducer }) => authReducer.notification);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setNotification({
			type: '',
			message: ""
		}));
	}, [dispatch]);

	return (
		<>
			<Content />
			{type && <AuthToast />}
		</>
	)
}
export default Home
