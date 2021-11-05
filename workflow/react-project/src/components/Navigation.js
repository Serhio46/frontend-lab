import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { RoutesName } from '../routes/index.js';

import classNames from 'classnames';
import CastomToast from './castomToast/CastomToast';


const menuItems = [
	{
		icon: faSearch,
		to: RoutesName.SEARCH,
		title: 'search'
	},
	{
		icon: faStar,
		to: RoutesName.FAVORITES,
		title: 'favorites'
	},
	{
		icon: faHouseUser,
		to: RoutesName.HOME,
		title: 'home'
	}]


function Navigation({ onSelectLink, active }) {

	return (
		<div className="user-block">
			{menuItems.map((item, index) => {
				return (
					<Link onClick={() => onSelectLink(index)} className={classNames('user-block-link', { 'link-active': active === index })} to={item.to} key={index}>
						<FontAwesomeIcon className={'link-icon'} icon={item.icon} />
						<div className='toast-header'>
							<CastomToast title={item.title} component={'header'} />
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default Navigation;
