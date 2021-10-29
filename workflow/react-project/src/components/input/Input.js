import React, { useState } from 'react';
import './input.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function Input({ type, placeholder, label, name, onChange, value, onBlur }) {

	const [onDown, setOnDown] = useState(false);
	const [type1, setType] = useState(type);

	const onMouseDown = () => {
		!onDown ? setType('text') : setType('password');
		setOnDown(!onDown);
	}

	return (
		<>
			<label htmlFor={name} className='input-label'>{label}</label>
			<div className="input-block">
				<input
					className="input-form"
					type={type1}
					placeholder={placeholder}
					name={name}
					id={name}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
				/>
				{type === 'password' &&
					<div onMouseDown={onMouseDown} onMouseUp={onMouseDown} >
						{onDown ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
					</div>
				}
			</div>
		</>
	)
}

export default Input;
