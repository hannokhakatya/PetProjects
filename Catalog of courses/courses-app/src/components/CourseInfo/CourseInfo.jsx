import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { tranformCourseDurationIntoString } from '../../helpers/pipeDuration';
import s from './CourseInfo.module.css';

const COURSES_URL = '/courses'
const NOT_FOUND_URL = '/not_found';


function CourseInfo({coursesList , allAuthorsList}) {
    const { courseId }= useParams();
    const navigate = useNavigate();

    useEffect (()  => {
        if(!course) {
        navigate(NOT_FOUND_URL, {replace:true})
        }
    })

    let course = coursesList.find((course) => course.id === courseId)
    
    let authorsNames = course?.authors.map((authorId) => {
        let authorName;
        allAuthorsList.forEach((authorObject) => {
            if (authorObject.id === authorId) {
                authorName = authorObject.name;
            }
        });
        return authorName;
    });
	return (
    <div className={s.courseInfo}>
        <Link to={COURSES_URL}>{'<'}Back to courses</Link>
    <h2>{course?.title}</h2>
		<div className={s.courseCard}>
			<div className={s.courseTitleAndDescription}>
				<div>{course?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quis et soluta ipsa nihil? Nisi non perspiciatis iusto exercitationem nemo ea quas, quo quibusdam delectus ut, cumque quisquam quia porro voluptates. Aperiam ex assumenda quo quidem nemo temporibus error obcaecati animi libero nam harum aliquam culpa, vel consequatur, voluptatem neque fugit? Maiores, corrupti! Ratione recusandae cupiditate quisquam velit perferendis placeat unde suscipit quia consequatur repellat. Porro, deleniti. Quod autem enim adipisci consectetur dolores distinctio praesentium delectus, excepturi, ipsum facere minima explicabo veniam, nisi odit! Sit rem recusandae est quas quam magni veritatis placeat, doloremque, labore eligendi dolore maiores! Eveniet, natus.</div>
			</div>
			<div>
            <p className={s.id}>
					<b>ID:</b>
					{course?.id}
				</p>
				<p className={s.duration}>
					<b>Duration:</b>
					{tranformCourseDurationIntoString(course?.duration)}
				</p>
				<p className={s.created}>
					<b>Created:</b>
					{course?.creationDate.split('/').join('.')}
				</p>
                <p className={s.authors}>
					<b>Authors:</b>
					{authorsNames?.join(', ')}
				</p>
			</div>
		</div>
        </div>
	);
}

export default CourseInfo;
