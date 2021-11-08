import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from "react-router";
import { privateRoutes, publicRoutes, RoutesName } from "../routes/index";

const AppRouter = () => {

	const { isAuth } = useSelector(({ authReducer }) => authReducer);

	return (
		isAuth ?
			<Switch>
				{privateRoutes.map(route =>
					<Route path={route.path}
						exact={route.exact}
						component={route.component}
						key={route.path}
					/>
				)}
				<Redirect to={RoutesName.HOME} />
			</Switch>
			:
			<Switch>
				{publicRoutes.map(route =>
					<Route path={route.path}
						exact={route.exact}
						component={route.component}
						key={route.path} />
				)}
				<Redirect to={RoutesName.HOME} />
			</Switch>
	);
}

export default AppRouter;