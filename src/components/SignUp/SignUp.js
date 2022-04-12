import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './SignUp.css'
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate()



    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/shop')
    }
    const handleCreateUser = event => {
        event.preventDefault() /* Page reload off */
        if (password !== confirmPassword) {
            setError('Your confirm password didnot match')
            return
        }
        if (password.length < 6) {
            setError('Your password should at least 6 character')
            return
        }
        createUserWithEmailAndPassword(email, password)
    }


    return (
        <div className='login-container'>
            <div>
                <h2 className='login-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='login-btn' type="submit" value="signUp" />
                </form>
                <p>
                    Already have an account? <Link className='signup-btn' to='/login'>Login</Link>
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

export default SignUp;