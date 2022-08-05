import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import Button from '../../common/Button/Button';
import Logo from './copmonents/Logo/Logo';
import s from './Header.module.css';

const LOGOUT_URL = '/logout';

function Header() {
	const navigate = useNavigate();
	const logout = () => {
		try{
			axios.delete(LOGOUT_URL, {
			headers:{
				Autorisation: localStorage.getItem('token')
			}
		})
		.then();
		localStorage.removeItem('token');
		navigate('/login',{replace:true})
		} catch (err){
			console.log('You can`t logout')
		}
	}
	return (
		<div className={s.header}>
			<Logo />
			<div className={s.logout}>
				{localStorage.getItem('token') && (
				<>
				<div className={s.name}>{localStorage.getItem('currentUserName')}</div>
				<Button buttonText='Logout'  onClick={logout}/>
				</>	
)}
		</div>
		</div>
	);
}

export default Header;
