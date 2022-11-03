import React, {useState} from 'react';
import SignUpNav from "../../components/SignUpNav/SignUpNav";
import Main from '../Main/Main';

const SignUp = (props) => {
  const {title, handleLogin, handleSelection}= props;
  return (
    <div className='signup__page'>
        <SignUpNav title="Login" handleLogin = {handleLogin} handleSelction = {handleSelection}/>
        <div>Sign Up Section</div>
    </div>
  )
}

export default SignUp