import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <Link to = '/'>
                <img 
                    className="login__logo"
                    src="./images/amazonlogo.png"
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' />

                    <h5>Password</h5>
                    <input type='password' />

                    <button className='login__signInButton'>Sign-in</button>
                </form>

                <p>
                    By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our 
                    Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton'>Create your Amazone Account</button>
            </div>
        </div>
    )
}

export default Login
