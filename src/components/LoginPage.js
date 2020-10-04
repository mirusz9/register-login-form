import React from 'react';
import { Link } from 'react-router-dom';
import LabeledInput from './LabeledInput';
import SubmitButton from './SubmitButton';
import './LoginPage.css';

const LoginPage = () => {
	return (
		<div className="container">
			<h1 className="title">Log in</h1>
			<div className="loginDiv">
				<form>
					<LabeledInput type="text" name="username" label="Username" />
					<LabeledInput type="password" name="pass" label="Password" />
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
