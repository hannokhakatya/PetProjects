import s from './Courses.module.css';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LOGIN_URL = '/login';

function Courses(props) {
	const [searchValue, setSearchValue] = useState('');
	const navigate = useNavigate();

	const coursesCards = props.coursesList.map((course) => {
		let authorsNames = course.authors.map((authorId) => {
			let authorName;
			props.allAuthorsList.forEach((authorObject) => {
				if (authorObject.id === authorId) {
					authorName = authorObject.name;
				}
			});
			return authorName;
		});
		return (
			<CourseCard
				key={course.id}
				title={course.title}
				description={course.description}
				authors={authorsNames}
				duration={course.duration}
				created={course.creationDate}
				id={course.id}
			/>
		);
	});

	const [filtredCards, setFiltredCards] = useState(coursesCards);

	function searchFilfer(value) {
		setFiltredCards(
			coursesCards.filter(
				(course) =>
					course.props.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
			)
		);
	}
	let onInputChange = (e) => {
		setSearchValue(e.target.value);
		if (searchValue === '') {
			setFiltredCards(coursesCards);
		}
	};

	useEffect(() => {
		if(!localStorage.getItem('token')){
		navigate(LOGIN_URL,{replace:true})
		}
	})

	return (
		<main className={s.courses}>
			<div className={s.searchBarAndButton}>
				<SearchBar
					onChange={onInputChange}
					onClick={() => searchFilfer(searchValue)}
				/>
				<Link to='add'>
					<Button buttonText='Add new course' />
				</Link>
			</div>
			{searchValue === '' ? coursesCards : filtredCards}
		</main>
	);
}

export default Courses;
