import Button from '../../../../common/Button/Button';
import s from './Author.module.css';

function Author(props) {
	return (
		<div className={s.author}>
			<p>{props.authorName}</p>
			<Button buttonText='Add author' onClick={props.onClick} />
		</div>
	);
}

export default Author;
