import CreateAccount from "../../components/CreateAccount/CreateAccount";
import SignInNav from "../../components/SignInNav/SignInNav";
// import SignUp from "../../components/SignUp/SignUp";

const SignUpMain = () => {
  return (
    // <div className="signup-main-container">
    <div className="signin__page">
      <SignInNav title="Login" />
      <div className="signupmain__container"><CreateAccount /></div>
    </div>
    // </div>
  );
};

export default SignUpMain;
