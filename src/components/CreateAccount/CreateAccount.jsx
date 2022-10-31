import { useState } from 'react'

const CreateAccount = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  //comment
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  )
}

export default CreateAccount