import React, {useState} from 'react';
import SignInNav from '../../components/SignInNav/SignInNav'

const SignUp = (props) => {
  const {handleLogin}= props;
  return (
    <div className='signin__page'>
        <SignInNav title="Login" handleLogin = {handleLogin}/>
        <div>Sign Up Section</div>
    </div>
  )
}

export default SignUp