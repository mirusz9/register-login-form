import React from 'react';
import s from './LabeledInput.module.css';

const LabeledInput = (props) => {
	return (
		<React.Fragment>
			<label className={s.label} htmlFor={props.id || props.label}>
				{props.label}
			</label>
			<br />
			<input
				className={s.input}
				type={props.type}
				name={props.name}
				id={props.id || props.label}
			/>
			<br />
		</React.Fragment>
	);
};

export default LabeledInput;
