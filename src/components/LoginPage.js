import React from 'react';
import { Link } from 'react-router-dom';
import "./LoginPage.css"

const LoginPage = () => {
	return (
		<div className="container">
			<h1 className="title">Log in</h1>
			<div className="loginDiv">
				<form>
					<label htmlFor="username">Username</label><br/>
					<input type="text" name="username" id="username" /><br/>
					<label htmlFor="password">Password</label><br/>
					<input type="password" name="password" id="password" />
				</form>
			</div>
			<Link to="/register">Register</Link>
		</div>
	);
};

export default LoginPage;
