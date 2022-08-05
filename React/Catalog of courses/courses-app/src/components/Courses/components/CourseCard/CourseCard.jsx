import s from './CourseCard.module.css';
import Button from '../../../../common/Button/Button';
import { tranformCourseDurationIntoString } from '../../../../helpers/pipeDuration';
import { useNavigate } from 'react-router-dom';

function CourseCard(props) {
	
	const navigate = useNavigate();

	const handleClick = (id) => {
		navigate(id,{replace:true})
	}
	return (
		<div className={s.courseCard}>
			<div className={s.courseTitleAndDescription}>
				<h2>{props.title}</h2>
				<div>{props.description}</div>
			</div>
			<div className={s.courseInfo}>
				<p className={s.authors}>
					<b>Authors:</b>
					{props.authors.join(', ')}
				</p>
				<p className={s.duration}>
					<b>Duration:</b>
					{tranformCourseDurationIntoString(props.duration)}
				</p>
				<p className={s.created}>
					<b>Created:</b>
					{props.created.split('/').join('.')}
				</p>
				<p className={s.showCourse}>
					<Button buttonText='Show course' onClick ={() => handleClick(props.id)}/>
				</p>
			</div>
		</div>
	);
}

export default CourseCard;
