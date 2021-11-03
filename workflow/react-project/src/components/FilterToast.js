import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css'

function FilterToast() {
	const { type, message } = useSelector(({ filterReducer }) => filterReducer.error);

	const notify = () => {
		if (type === 'error') {
			return toast.error(`${message}`, {
				position: 'bottom-left',
				className: 'auth-toast',
				theme: 'colored'
			});
		}
		return null
	};

	useEffect(() => {
		notify()
	}, [type])

	return (
		<ToastContainer />
	);
}

export default FilterToast;