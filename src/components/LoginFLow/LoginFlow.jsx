import React from 'react'

const LoginFlow = () => {
  return (
    <div>
        <div>
            <img src="" alt="Synergy icon" />
            <h1>Synergy</h1>    
        </div>
        <div>
            <h1>Welcome Back!</h1>
            <img src="" alt="Handwave" />
            
            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu leo urna.</p>
            <h2>Email</h2>
            <input type="text" placeholder="enter your email"/>
            <h2>Password</h2>
            <input type="text" placeholder="enter your psw"/>
            </div>

            <div>
                <p>Don't have an account?<a href="#sugnup">Sign Up</a></p>
                <p>Forgotten Password?</p>
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}

export default LoginFlow