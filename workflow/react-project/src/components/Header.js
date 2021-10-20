import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { showModal } from '../Redux/Actions/modalAction';
import { useDispatch } from 'react-redux';

import Button from './Button';

function Header() {

	const dispatch = useDispatch();

	const getStart = () => dispatch(showModal());

	return (
		<div className='header'>
			<div className='header__logo'>
				<div className='header__image'>
					<FontAwesomeIcon icon={faCocktail} />
				</div>
				<div className='header__text'>Cocktail App</div>
			</div>
			<div className='header__register' onClick={getStart}>
				<Button action={'Getting started'} />
			</div>
		</div>
	);
}

export default Header;
