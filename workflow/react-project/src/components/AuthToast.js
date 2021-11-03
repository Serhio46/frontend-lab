import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css'

function AuthToast() {
	const { type, message } = useSelector(({ authReducer }) => authReducer.notification);

	const notify = () => type === 'success'
		?
		toast.success(`${message}`, {
			position: 'bottom-left',
			className: 'auth-toast',
			theme: 'colored'
		})
		:
		toast.error(`${message}`, {
			position: 'bottom-left',
			className: 'auth-toast',
			theme: 'colored'
		});

	useEffect(() => {
		notify()
	}, [type])

	return (
		<>
			<ToastContainer />
		</>
	);
}

export default AuthToast;