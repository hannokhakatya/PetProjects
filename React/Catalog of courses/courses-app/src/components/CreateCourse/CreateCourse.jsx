import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Author from './components/Author/Author';
import s from './CreateCourse.module.css';
import { useState } from 'react';
import { tranformCourseDurationIntoString } from '../../helpers/pipeDuration';
import { v4 as uuidv4 } from 'uuid';
import { formatDate } from '../../helpers/dateGenerator';
import { useNavigate } from 'react-router-dom';

let newDuration = 0;

function CreateCourse(props) {
	const [transformedDuration, setNewTransformedDuration] = useState('00:00');
	const [chosenAuthorsList, setChosenAuthorsList] = useState([]);
	const [leftAuthorsList, setLeftAuthorsList] = useState(props.allAuthorsList);
	const [newTitle, setNewTitle] = useState('');
	const [newAuthorName, setNewAuthorName] = useState('');
	const [newDescription, setNewDescription] = useState('');

	let navigate = useNavigate();

	function setTitleValue(e) {
		setNewTitle(e.target.value);
	}

	function setDescriptionValue(e) {
		setNewDescription(e.target.value);
	}

	function setAuthorName(e) {
		setNewAuthorName(e.target.value);
	}

	let authorsElements = leftAuthorsList.map((authorObject) => {
		return (
			<Author
				authorName={authorObject.name}
				key={authorObject.id}
				onClick={() => chooseAuthor(authorObject.id)}
				buttonText='Add author'
			/>
		);
	});

	let chosenAuthorsElements = chosenAuthorsList.map((authorObject) => {
		return (
			<Author
				authorName={authorObject.name}
				key={authorObject.id}
				onClick={() => deleteAuthor(authorObject.id)}
				buttonText='Delete author'
			/>
		);
	});

	function chooseAuthor(choosenAuthorId) {
		leftAuthorsList.forEach((authorObject) => {
			if (authorObject.id === choosenAuthorId) {
				setChosenAuthorsList([...chosenAuthorsList, authorObject]);
			}
		});
		setLeftAuthorsList(
			leftAuthorsList.filter(
				(authorElement) => authorElement.id !== choosenAuthorId
			)
		);
	}
	function deleteAuthor(choosenAuthorId) {
		chosenAuthorsList.forEach((authorObject) => {
			if (authorObject.id === choosenAuthorId) {
				setLeftAuthorsList([...leftAuthorsList, authorObject]);
			}
		});
		setChosenAuthorsList(
			chosenAuthorsList.filter(
				(authorElement) => authorElement.id !== choosenAuthorId
			)
		);
	}
	function getDurationValue(e) {
		if (Number.isInteger(+e.target.value)) {
			newDuration = +e.target.value;
			setNewTransformedDuration(tranformCourseDurationIntoString(newDuration));
		}
	}

	function generateNewCourse() {
		let newCourse = {
			id: uuidv4(),
			title: newTitle,
			description: newDescription,
			creationDate: formatDate(new Date()),
			duration: newDuration,
			authors: chosenAuthorsList.map((authorObject) => authorObject.id),
		};
		if (newTitle === '' || newDescription === '' || newDuration === 0) {
			alert('Please, fill in all fields');
		} else if (newDescription.length < 2) {
			alert('Text length should be at least 2 characters');
		} else {
			props.setCoursesList([...props.coursesList, newCourse]);
			setNewTitle('');
			setNewDescription('');
			newDuration = '';
			setNewAuthorName('');
			navigate('/courses', { replace: true });
		}
	}

	function createAuthor() {
		if (newAuthorName.length < 2) {
			alert('Author name length should be at least 2 characters');
		} else {
			let newAuthorObject = {
				id: uuidv4(),
				name: newAuthorName,
			};
			props.setAllAuthorsList([...props.allAuthorsList, newAuthorObject]);
			setLeftAuthorsList([...leftAuthorsList, newAuthorObject]);
		}
	}

	return (
		<div className={s.createCourse}>
			<div className={s.sectionAddCourse}>
				<div className={s.addTitle}>
					<Input
						labelText='Title'
						placeholder='Enter title...'
						onChange={setTitleValue}
					/>
				</div>
				<Button onClick={generateNewCourse} buttonText='Create course' />
			</div>
			<div className={s.addDescription}>
				<label htmlFor='courseDescription'>Description</label>
				<textarea
					onChange={setDescriptionValue}
					className={s.descriptionTextArea}
					id='courseDescription'
					placeholder='Enter description '
				></textarea>
			</div>
			<div className={s.addAuthors}>
				<div className={s.leftSection}>
					<div className={s.addAuthor}>
						<h4>Add Author</h4>
						<Input
							labelText='Author name'
							placeholder='Enter author name'
							onChange={setAuthorName}
						/>
						<Button buttonText='Create author' onClick={createAuthor} />
					</div>
					<div className={s.duration}>
						<h4>Duration</h4>
						<Input
							labelText='Duration'
							placeholder='Enter duration in minutes...'
							onChange={getDurationValue}
							value={newDuration}
						/>
						<p className={s.time}>Duration:{transformedDuration} hours</p>
					</div>
				</div>
				<div className={s.rightSection}>
					<div className={s.authors}>
						<h4>Authors</h4>
						{authorsElements}
					</div>
					<div className={s.courseAuthors}>
						<h4>Course authors</h4>
						{chooseAuthor.length === 0 ? (
							<p>Authors list is empty </p>
						) : (
							chosenAuthorsElements
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreateCourse;
