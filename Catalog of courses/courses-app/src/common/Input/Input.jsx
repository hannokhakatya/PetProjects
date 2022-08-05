import s from './Input.module.css';
import React from 'react';

const Input = React.forwardRef((props,ref)=> {
	return (
		<>
			<label htmlFor={props.inputId}>{props.labelText}</label>
			<input
				onChange={props.onChange}
				id={props.inputId}
				className={s.input}
				autoComplete='off'
				placeholder={props.placeholder}
				value={props.value}
				ref={ref}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
				type={props.type}
			/>
		</>
	);
})

export default Input;
