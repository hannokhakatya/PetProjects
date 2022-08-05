import s from './Button.module.css';

function Button(props) {
	return (
		<button className={s.button} onClick={props.onClick} disabled={props.disabled}>
			{props.buttonText}
		</button>
	);
}

export default Button;
