import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Error, setError] = useState('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate('/shop')
    }


    const handleLoginBlur = event => {
        event.preventDefault()
        if (!user) {
            setError('Id Not found, Please Sign Up ')
            return
        }
        signInWithEmailAndPassword(email, password)

    }

    return (
        <div className='login-container'>
            <div>
                <h2 className='login-title'>Login</h2>
                <form onSubmit={handleLoginBlur}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{Error}</p>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {loading && <p>Loading.......</p>}

                    <input className='login-btn' type="submit" value="LogIn" />
                </form>
                <p>
                    New to Ema-john? <Link className='signup-btn' to='/signup'>Create New Account</Link>
                </p>
                <div className='line-container'>
                    <div className='line'></div>
                    <p>or</p>
                    <div className='line'></div>
                </div>
            </div>
        </div>
    );
};

export default Login;