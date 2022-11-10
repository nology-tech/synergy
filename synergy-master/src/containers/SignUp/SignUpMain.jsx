import SignInNav from "../../components/SignInNav/SignInNav";
import SignUp from "../../components/SignUp/SignUp";

const SignUpMain = () => {
  return (
    <div className="signin__page">
      <SignInNav title="Login" />
      <div className="signin__container"><SignUp /></div>
    </div>
  );
};

export default SignUpMain;
