import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { openAuth } from '../Redux/Actions/modalAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RoutesName } from '../routes/index.js';

import Navigation from './Navigation';
import Button from './Button';

function Header() {

	const dispatch = useDispatch();
	const { isAuth } = useSelector(({ authReducer }) => authReducer);

	const getStart = () => {
		dispatch(openAuth(true));
	}

	return (
		<div className='header'>
			<Link className="user-block-link" to={RoutesName.HOME}>
				<div className='header__logo'>
					<div className='header__image'>
						<FontAwesomeIcon icon={faCocktail} />
					</div>
					<div className='header__text'>Cocktail App</div>
				</div>
			</Link>
			{isAuth
				?
				<Navigation />
				:
				<div className='header__register' onClick={getStart}>
					<Button>Getting started</Button>
				</div>
			}
		</div>
	);
}

export default Header;
