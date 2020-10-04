import React from 'react';
import s from './SubmitButton.module.css';

const SubmitButton = (props) => {
	return (
		<button className={s.button} type="submit">
			{props.children}
		</button>
	);
};

export default SubmitButton;
