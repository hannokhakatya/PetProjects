import s from './Login.module.css'
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { useState, useEffect }  from 'react';
import axios from '../../api/axios';
import { Link, useNavigate } from 'react-router-dom';


const PWD_REGEX = /^(?=[^a-z]*[a-z])(?=\D*\d)[^:&.~\s]{7,19}$/;
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const LOGIN_URL = '/login';
const COURSES_URL = '/courses'

const Login =(props) => {
    const navigate = useNavigate();

    const [password,setPassword] = useState('');
    const [validPassword,setValidPassword] = useState(false);
    const [passwordFocus,setPasswordFocus] = useState(false);

    const [email,setEmail] = useState('');
    const [validEmail,setValidEmail] = useState(false);
    const [emailFocus,setEmailFocus] = useState(false);

    const [errMsg,setErrMsg] = useState('');
  

    useEffect(()=> {
        setValidEmail(EMAIL_REGEX.test(email))
        setValidPassword(PWD_REGEX.test(password))
        setErrMsg('')
    },[email,password]);

    useEffect(() => {
		if(localStorage.getItem('token')){
		navigate(COURSES_URL,{replace:true})
		}
	})

    const handleSubmit = async(e) => {
        e.preventDefault();
       
       try{
        const response = await axios.post(LOGIN_URL,({email,password}),
        );
        console.log(response);
        if(response.data.successful === true) {
            const token = response.data.result;
            localStorage.setItem('token',token);
            localStorage.setItem('currentUserName', response.data.user.name)
            navigate('/courses', {replace:true});
        }
       }catch (error){
        setErrMsg('Login failed')
       }
    };

    return (
        <div className={s.login}>
            <p className={errMsg ? s.errMsg : s.offscreen}>{errMsg}</p>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor='email'>Email</label>
                    <Input id='email' placeholder='Enter email'onChange={(e)=>setEmail(e.target.value)} onFocus={()=>setEmailFocus(true)} onBlur={()=>setEmailFocus(false)}required/>
                    <p className={ emailFocus && email && !validEmail ? s.instructions : s.offscreen}>
                        Must be email format : example@gmail.com<br/>
                    </p>
                    </div>
                <div>
                <label htmlFor='password'>Password</label>
                    <Input id='password' placeholder='Enter password'onChange={(e)=>setPassword(e.target.value)} onFocus={()=>setPasswordFocus(true)} onBlur={()=>setPasswordFocus(false)} type='password' required/>
                    <p className={ passwordFocus && password && !validPassword ? s.instructions : s.offscreen}>
                    Must be 5-20 characters<br/>
                    Must contain at least one lower-case letter <br/>
                    Must contain at least one number<br/>
                    Must not contain a colon (:); an ampersand (&); a period (.); a tilde (~); or a space.</p>
                    </div>
                <div>
                   <Button buttonText='Login' disabled={!validEmail || !validPassword ? true : false}/>
                    </div>
            </form>
            <p>If you don't have an account you can go to <Link to='/registration' >Registration</Link></p>
        </div>
    )
}

export default Login;