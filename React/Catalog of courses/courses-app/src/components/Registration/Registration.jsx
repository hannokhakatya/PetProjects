import s from './Registration.module.css'
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { useState,useRef }  from 'react';
import axios from '../../api/axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,19}$/;
const PWD_REGEX = /^(?=[^a-z]*[a-z])(?=\D*\d)[^:&.~\s]{7,19}$/;
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const REGISTER_URL = '/register';
const COURSES_URL = '/courses'

const Registration =(props) => {
    const nameRef = useRef();
    const navigate = useNavigate();

    const [name,setName] = useState('');
    const [validName,setValidName] = useState(false);
    const [nameFocus,setNameFocus] = useState(false);

    const [password,setPassword] = useState('');
    const [validPassword,setValidPassword] = useState(false);
    const [passwordFocus,setPasswordFocus] = useState(false);

    const [email,setEmail] = useState('');
    const [validEmail,setValidEmail] = useState(false);
    const [emailFocus,setEmailFocus] = useState(false);

    const [errMsg,setErrMsg] = useState('');


    useEffect(()=>{
        nameRef.current.focus()
    },[]);

    useEffect(()=> {
        setValidName(NAME_REGEX.test(name))
        setValidEmail(EMAIL_REGEX.test(email))
        setValidPassword(PWD_REGEX.test(password))
        setErrMsg('')
    },[name,email,password]);

    useEffect(() => {
		if(localStorage.getItem('token')){
		navigate(COURSES_URL,{replace:true})
		}
	})

    const handleSubmit = async(e) => {
        e.preventDefault();
       
       try{
        const response = await axios.post(REGISTER_URL,({name,email,password}),
        );
        console.log(response);
        if(response.data.successful === true) {
            navigate('/login', {replace:true});
        }
       }catch (error){
        setErrMsg('Registration failed')
       }
    };

    
    return (
        <div className={s.registration}>
            <p className={errMsg ? s.errMsg : s.offscreen}>{errMsg}</p>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <Input id='name' placeholder='Enter name'onChange={(e)=>setName(e.target.value)} ref={nameRef} onFocus={()=>setNameFocus(true)} onBlur={()=>setNameFocus(false)}
                    required/>
                    <p className={ nameFocus && name && !validName ? s.instructions : s.offscreen}>4 to 20 characters<br/>
                    Must begin with a letter <br/>
                    Letters,numbers,underscores hyphens allowed</p>
                </div>
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
                   <Button buttonText='Registration' disabled={!validName || !validEmail || !validPassword ? true : false}/>
                    </div>
            </form>
            <p>If you have an account you can <Link to='/login' >Login</Link></p>
        </div>
    )
}

export default Registration;