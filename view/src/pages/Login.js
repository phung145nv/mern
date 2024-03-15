import React, { useState } from 'react'
import "./css/Login.css"

const Login = () => {
  const [loginState, setLoginState] = useState(true);
  const [signUpState, setSignUpState] = useState(false);

  return (
    <div className='page-login'>
      <div className="content-login">
        {
        loginState  && 
        <>
          <h1>Login</h1>
          <input type="text" placeholder='Email address'/> 
          <input type="text"  placeholder='Password'/>
          <button className="btn btn-custom">Continue</button>
          <p>Create an account?
          <a href="#" onClick={() => {setLoginState(false);
          setSignUpState(true)}}>Click here</a>
          </p>
          <p><input type="checkbox"/> I agree with the terms of use and privacy policy</p>
        </>
        }
         {
        signUpState  && 
        <>
            <h1>Sign up</h1>
            <input type="text" placeholder='Account'/> 
            <input type="text" placeholder='Email address'/> 
            <input type="text"  placeholder='Password'/>
            <button className="btn btn-custom">Continue</button>
            <p>Have you had an account?
              <a href="#" onClick={() => {setLoginState(true)
              setSignUpState(false)}}>Login here</a>  
            </p>
   
        </>
        }
      </div>

    </div>
  )
}

export default Login
