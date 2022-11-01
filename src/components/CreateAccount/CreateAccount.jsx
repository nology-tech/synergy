import { useState } from 'react'

const CreateAccount = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  
    // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  //comment
  const [error, setError] = useState(false);
  
  // Handling the name change
  const handleName = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    setEmail(email);
    //setEmail(e.target.value);
    setSubmitted(false);
  };
 
  const validateEmail = (email) => {
    return email.includes("@") 
  }

  // Handling the email change
  const handleEmail = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    setEmail(email);
    //setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleConfirmedPassword = (e) => {
    setConfirmedPassword(e.target.value);
    setSubmitted(false);
  };

  return (
    <div className='signup-form'>
      <div className='signup-header'>
        <h3>Synergy logo goes here</h3>
      </div>
      <div>
        <h1>Create an Account</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form>
          {/* Labels and inputs for form data */}
          <label className="label">Email</label>
          <input onChange={handleEmail} className="input"
            value={email} type="text" />
            if {validateEmail} <p>test</p>
  
          <label className="label">Password</label>
          <input onChange={handlePassword} className="input"
            value={password} type="email" />
  
          <label className="label">Confirm Password</label>
          <input onChange={handleConfirmedPassword} className="input"
            value={confirmedPassword} type="password" />

          <p>Already have an account?</p>
  
          {/* <button onClick={handleSubmit} className="btn" type="submit">
            Continue
          </button> */}
      </form>
      </div>
  
    </div>

  )
  //)
}

export default CreateAccount