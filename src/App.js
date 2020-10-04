import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import LoginPage from './components/LoginPage.js';
import RegisterPage from './components/RegisterPage.js';

function App() {
	return (
		<Router>
			<Switch>
				<Redirect exact from="/" to="/login" />
				<Route path="/login" render={LoginPage} />
				<Route path="/register" render={RegisterPage} />
			</Switch>
		</Router>
	);
}

export default App;
