import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

function Header({ setActive }) {
	return (
		<div className='header'>
			<div className='header__logo'>
				<div className='header__image'>
					<FontAwesomeIcon icon={faCocktail} />
				</div>
				<div className='header__text'>Cocktail App</div>
			</div>
			<div className='header__register' onClick={() => setActive(true)}>
				<Button />
			</div>
		</div>
	);
}

export default Header;
