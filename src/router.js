import React from 'react';
import { Router, hashHistory } from 'react-router';

import Home from './components/Home';
import Main from './components/Main';

const componentRoutes = {
	component: Home,
	path: '/',
	indexRoute: { component: Main }
};

const Routes = () => <Router history={hashHistory} routes={componentRoutes} />;

export default Routes;
