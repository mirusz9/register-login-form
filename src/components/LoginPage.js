import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	return (
		<div>
			<h1>Log in</h1>
			<div>
				<form>
					<label for="username">Username</label>
					<input type="text" name="username" id="username" />
					<label for="password">Password</label>
					<input type="password" name="password" id="password" />
				</form>
			</div>
			<Link to="/register">Register</Link>
		</div>
	);
};

export default LoginPage;
