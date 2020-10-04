import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LabeledInput from './LabeledInput';
import SubmitButton from './SubmitButton';
import './LoginPage.css';



const LoginPage = () => {

	const handleUsernameChange = ({ target: { value } }) => {
		console.log(value);
	};

	const handlePasswordChange = ({ target: { value } }) => {
		console.log(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log(state);
	};

	return (
		<div className="container">
			<h1 className="title">Log in</h1>
			<div className="loginDiv">
				<form onSubmit={handleSubmit}>
					<LabeledInput
						type="text"
						name="username"
						label="Username"
						onChange={handleUsernameChange}
					/>
					<LabeledInput
						type="password"
						name="pass"
						label="Password"
						onChange={handlePasswordChange}
					/>
					<SubmitButton>Log in</SubmitButton>
				</form>
			</div>
			<div className="register">
				<Link id="register" to="/register">
					Create an account.
				</Link>
			</div>
		</div>
	);
};

export default LoginPage;
