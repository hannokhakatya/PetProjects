import { Link } from 'react-router-dom';
import s from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={s.NotFound}>
            <h1> Not Found</h1>
            <p> Go to <Link to='/'>Home Page</Link></p>
        </div>
    )
}

export default NotFound;