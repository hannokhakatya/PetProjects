import s from './Logo.module.css';

function Logo() {
	return (
		<img
			className={s.logo}
			src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GHFzicMYaZPHv7YBikNwffrogSMVnTvLsQ&usqp=CAU'
			alt='Logo'
		/>
	);
}

export default Logo;
