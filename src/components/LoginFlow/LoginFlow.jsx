import React from 'react'
import "./LoginFlow.scss"
import emojihand from "../../assets/images/Emojihand.png"
import synergy from "../../assets/images/synergy.png"

const LoginFlow = () => {
  return (
       <>
        <nav>Navbar placeholder</nav>
        <main className="background">
             <div className="loginFlow">
            <div className="loginFlow__synergyIcon">
                <img src={synergy} alt="Synergy icon" className="loginFlow__synergyImg"/>
                <h1 >Synergy</h1>    
            </div>
            <div className="loginFlow__main">
                <div className="loginFlow__main__header">
                <h1>Welcome Back!</h1>
                <img src={emojihand} alt="Handwave" className="loginFlow__main__img"/>
                </div>

                <div className="loginFlow__credentials">
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu leo urna.</p>
                <h2 className="loginFlow__credentials__header">Email</h2>
                <input className="loginFlow__inputbox" type="text" placeholder="enter your email"/>
                <h2 className="loginFlow__credentials__header">Password</h2>
                <input className="loginFlow__inputbox" type="text" placeholder="enter your psw"/>
                </div>

                <div className="loginFlow__links">
                    <p>Don't have an account?<a href="#sugnup">Sign Up</a></p>
                    <p>Forgotten Password?</p>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>
        </div>
        </main>
        </> 
    
  )
}

export default LoginFlow