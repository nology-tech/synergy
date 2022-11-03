import { useState } from "react";
import "./App.scss";
import Main from "./containers/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import UserDashboard from "./containers/UserDashboard/UserDashboard";

const App = () => {
  const [signUp, setSignUp] = useState("Home");
  const [logged, setLogin] = useState(false);

  const toggleLogin = () => {
    setLogin(!logged);
  };

  const updateSignIn = (event) => {
    setSignUp(event.target.getAttribute("value"));
    console.log(signUp);
  };

  const logOut = () => {
    setSignUp("Home");
    toggleLogin();
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/signin"
            element={<SignIn handleLogin={toggleLogin} />}
          />
          <Route
            path="/signup"
            element={<SignUp handleLogin={toggleLogin} />}
          ></Route>
          <Route
            path="/dashboard"
            element={<UserDashboard handleLogout={logOut} />}
          ></Route>
          <Route
            path="/home"
            element={
              <Main
                signUp={signUp}
                logged={logged}
                handleSelection={updateSignIn}
                handleLogin={toggleLogin}
                handleLogout={logOut}
              />
            }
          ></Route>
          <Route
            path="/"
            element={
              <Main
                signUp={signUp}
                logged={logged}
                handleSelection={updateSignIn}
                handleLogin={toggleLogin}
                handleLogout={logOut}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
