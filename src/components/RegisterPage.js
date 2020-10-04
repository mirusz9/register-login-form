import React from 'react';
import { Link } from 'react-router-dom';
import LabeledInput from './LabeledInput';
import SubmitButton from './SubmitButton';
import './RegisterPage.css';

const RegisterPage = () => {
	return (
		<div className="container">
			<h1 className="title">Register</h1>
			<div className="registerDiv">
				<form>
					<LabeledInput type="text" name="username" label="Username" />
					<LabeledInput type="password" name="pass" label="Password" />
					<LabeledInput
						type="password"
						name="repeatedPass"
						label="Repeat Password"
					/>
					<SubmitButton>Register</SubmitButton>
				</form>
			</div>
			<div className="login">
				<Link id="login" to="/login">
					Log in.
				</Link>
			</div>
		</div>
	);
};

export default RegisterPage;
