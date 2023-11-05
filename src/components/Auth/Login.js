import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiServices';
import { toast } from 'react-toastify';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handlleLogin = async () => {
        //validate
        const isValidateEmail = validateEmail(email);
        if (!isValidateEmail) {
            toast.error('Invalid Email !!!')
            return;
        }
        if (!password) {
            toast.error('Invalid Password !!!')
            return;
        }
        //submit
        let res = await postLogin(email, password);
        if (res && +res.EC === 0) {
            toast.success(res.EM);
            navigate('/admin/manage-users');
        }
        if (res && +res.EC !== 0) {
            toast.error(res.EM);
        }
    }
    return (
        <div className="login-container">
            <div className='header' >
                <span>Don't have an account yet?</span>
                <button className="btn-signup" onClick={() => { navigate('/signup') }}>
                    Sign up
                </button>
            </div>
            <div className='title col-3 mx-auto' >
                <span onClick={() => { navigate('/') }}>TNTT 21</span>
            </div>
            <div className='welcome col-3 mx-auto'>
                Hello, who's this?
            </div>
            <div className='content-form col-3 mx-auto'>
                <div className='form-group'>
                    <label>
                        Email
                    </label>
                    <input
                        type={"email"}
                        className='form-control'
                        placeholder='tntt21@gmail.com'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label>
                        Password
                    </label>
                    <input
                        type={"password"}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <span className='forgot-password'>Forgot your password?</span>
                <div >
                    <button
                        className='btn-submit'
                        onClick={() => handlleLogin()}>Login in to TNTT21</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navigate('/') }}>
                        &#60;&#60; Go to Homepage</span>
                </div>
            </div>

        </div>
    )
}

export default Login;