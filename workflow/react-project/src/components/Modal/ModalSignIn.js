import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp, signIn } from '../../Redux/Actions/authActions'
import { useFormik } from 'formik';

import './modal.css';
import './modalSignIn.css';
import Input from '../input/Input';
import Button from '../Button';

function ModalSignIn() {
	const [isSignIn, setSignIn] = useState(true);
	const dispatch = useDispatch();

	const initialValues = {
		username: '',
		password: '',
		confirmpassword: '',
	};

	const onSubmit = (values) => {
		const user = {
			name: values.username,
			password: values.password
		};
		isSignIn
			?
			dispatch(signIn(user))
			:
			dispatch(signUp(user));
	}

	const validate = (values) => {
		let errors = {};
		if (!values.username) {
			errors.username = 'Required'
		}
		if (!values.password) {
			errors.password = 'Required'
		}
		if (!isSignIn && !values.confirmpassword) {
			errors.confirmpassword = 'Required'
		} else if (!isSignIn && values.confirmpassword !== values.password) {
			errors.confirmpassword = 'Passwords should be mutch'
		}
		return errors;
	}

	const formik = useFormik({
		initialValues,
		onSubmit,
		validate,
	});

	const toogleAuth = () => {
		setSignIn(!isSignIn)
	}

	return (
		<div className='modal__content modal__content-hiiden'>
			<div className='modal__content-title'>{isSignIn ? 'Sign In' : 'Sign Up'}</div>
			<form onSubmit={formik.handleSubmit} className='signin-form'>
				<div className='signin-form-control'>
					<Input
						type='text'
						placeholder='username'
						label={'Username'}
						name={'username'}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.username}
					/>
					{(formik.touched.username && formik.errors.username) && <div style={{ color: 'red' }}>{formik.errors.username}</div>}
				</div>
				<div className='signin-form-control'>
					<Input
						type='password'
						placeholder='password'
						label='Password'
						name={'password'}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
					{(formik.touched.password && formik.errors.password) && <div style={{ color: 'red' }}>{formik.errors.password}</div>}
				</div>
				<div className='signin-form-control'>
					{!isSignIn && <><Input
						type='password'
						placeholder='confirm password'
						label='Confirm password'
						name='confirmpassword'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.confirmpassword}
					/>
						{(formik.touched.confirmpassword && formik.errors.confirmpassword) && <div style={{ color: 'red' }}>{formik.errors.confirmpassword}</div>}
					</>}
				</div>
				{isSignIn ?
					<p className="signin-quest">Don't have an account? <span className="signin-quest-link" onClick={toogleAuth}>Sign up</span></p>
					:
					<p className="signin-quest">Already signed up? <span className="signin-quest-link" onClick={toogleAuth}>Go to login</span></p>
				}
				<Button type='submit' btnSignin={true}>{isSignIn ? 'Sign In' : 'Sign Up'}</Button>
			</form>
		</div>
	);
}

export default ModalSignIn;
