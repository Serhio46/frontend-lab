import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail, faSearch, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { openAuth } from '../Redux/Actions/modalAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RoutesName } from '../routes/index.js'

import Button from './Button';
import CastomToast from './castomToast/CastomToast';

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
				<div className="user-block">
					<Link className="user-block-link" id="search" to={RoutesName.SEARCH}>
						<FontAwesomeIcon icon={faSearch} />
					</Link>
					<Link className="user-block-link" to={RoutesName.FAVORITES}>
						<FontAwesomeIcon icon={faStar} />
					</Link>
					<Link className="user-block-link" to={RoutesName.HOME}>
						<FontAwesomeIcon icon={faHouseUser} />
					</Link>
				</div>
				:
				<div className='header__register' onClick={getStart}>
					<Button>Getting started</Button>
				</div>
			}
			<div className='toast-header'>
				<CastomToast title={"search"} component={'header'} />
			</div>
		</div>
	);
}

export default Header;