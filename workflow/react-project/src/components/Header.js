import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { openAuth } from '../Redux/Actions/modalAction';
import { useDispatch } from 'react-redux';

import Button from './Button';

function Header() {

	const dispatch = useDispatch();

	const getStart = () => {
		dispatch(openAuth(true));
	}

	return (
		<div className='header'>
			<div className='header__logo'>
				<div className='header__image'>
					<FontAwesomeIcon icon={faCocktail} />
				</div>
				<div className='header__text'>Cocktail App</div>
			</div>
			<div className='header__register' onClick={getStart}>
				<Button>Getting started</Button>
			</div>
		</div>
	);
}

export default Header;