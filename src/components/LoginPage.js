import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
	return (
		<div className="container">
			<h1 className="title">Log in</h1>
			<div className="loginDiv">
				<form>
					<label htmlFor="username">Username</label>
					<br />
					<input type="text" name="username" id="username" />
					<br />
					<label htmlFor="password">Password</label>
					<br />
					<input type="password" name="password" id="password" />
					<button type="submit">Log in</button>
				</form>
			</div>
			<div className="registerDiv">
				<Link id="register" to="/register">Create an account.</Link>
			</div>
		</div>
	);
};

export default LoginPage;
