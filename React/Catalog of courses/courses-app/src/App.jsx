import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Login from './components/Login/Login';
import { mockedCoursesList, mockedAuthorsList } from './constants';
import { useState } from 'react';
import Registration from './components/Registration/Registration';
import { Routes,Route, Navigate} from 'react-router-dom';
import CourseInfo from './components/CourseInfo/CourseInfo';
import NotFound from './components/NotFound/NotFound';

function App() {
	const [coursesList, setCoursesList] = useState(mockedCoursesList);
	const [allAuthorsList, setAllAuthorsList] = useState(mockedAuthorsList);

	return (
		<div className='wrapper'>
			<Header />
			<Routes>
				<Route path='/' element={ <Navigate to='/login' />}/>
				<Route path='/registration' element={<Registration />}/>
				<Route path='/login' element={<Login />}/>
				<Route exact path='/courses' element={<Courses
					coursesList={coursesList}
					allAuthorsList={allAuthorsList}
				/>}/>
				<Route path='/courses/:courseId' element={<CourseInfo allAuthorsList={allAuthorsList} coursesList={coursesList}
				/>}/>
				<Route path='/courses/add' element={<CreateCourse
					setCoursesList={setCoursesList}
					allAuthorsList={allAuthorsList}
					setAllAuthorsList={setAllAuthorsList}
					coursesList={coursesList}
				/>}/>
				<Route path='/not_found' element={<NotFound />} />
				<Route path='*' element={<NotFound />} />
			
			</Routes>
			
		</div>
	);
}

export default App;
