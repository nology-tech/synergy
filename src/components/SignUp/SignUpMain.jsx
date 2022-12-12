import CreateAccount from "../../containers/CreateAccount/CreateAccount";
import SignInNav from "../SignInNav/SignInNav";
// import SignUp from "../../components/SignUp/SignUp";

const SignUpMain = (props) => {
  const {email, handleEmail, validEmail}=props;
  return (
    // <div className="signup-main-container">
    <div className="signin__page">
      <SignInNav title="Login" />
      <div className="signupmain__container">
        <CreateAccount 
                email={email}
                handleEmail={handleEmail}
                validEmail={validEmail}
        /></div>
    </div>
    // </div>
  );
};

export default SignUpMain;

