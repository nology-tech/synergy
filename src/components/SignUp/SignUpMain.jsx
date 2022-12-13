import CreateAccount from "../../containers/CreateAccount/CreateAccount";
import SignInNav from "../SignInNav/SignInNav";

const SignUpMain = (props) => {
  const { email, handleEmail, validEmail } = props;
  return (
    <div className="signin__page">
      <SignInNav title="Login" />
      <div className="signupmain__container">
        <CreateAccount
          email={email}
          handleEmail={handleEmail}
          validEmail={validEmail}
        />
      </div>
    </div>
  );
};

export default SignUpMain;
