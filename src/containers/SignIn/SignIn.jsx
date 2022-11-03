import React from 'react'
import SignInNav from '../../components/SignInNav/SignInNav'

const SignIn = (props) => {
    const {handleLogin}= props;
  return (
    <div className='signin__page'>
        <SignInNav title="Sign Up" handleLogin = {handleLogin}/>
        <div>Sign In Section</div>
    </div>
  )
}

export default SignIn