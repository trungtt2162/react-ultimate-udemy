import { useState } from 'react';
import './Login.scss'
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handlleLogin = () => {
        alert('Login')
    }
    return (
        <div className="login-container">
            <div className='header' >
                Don't have an account yet?
            </div>
            <div className='title col-3 mx-auto'>
                TNTT 21
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

            </div>

        </div>
    )
}

export default Login;