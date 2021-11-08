import Home from '../pages/Home';
import Search from '../pages/Search';
import Favorites from '../pages/Favorites';


export const RoutesName = {
	HOME: '/',
	SEARCH: '/search',
	FAVORITES: '/favorites',
};

export const publicRoutes = [
	{ path: RoutesName.HOME, exact: true, component: Home },
];

export const privateRoutes = [
	{ path: RoutesName.SEARCH, exact: true, component: Search },
	{ path: RoutesName.FAVORITES, exact: true, component: Favorites },
	{ path: RoutesName.HOME, exact: true, component: Home },
];