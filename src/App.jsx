import "./App.scss";
import Main from "./containers/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import UserDashboard from "./containers/UserDashboard/UserDashboard";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/signin"
            element={<SignIn />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          ></Route>
          <Route
            path="/dashboard"
            element={<UserDashboard />}
          ></Route>
          <Route
            path="/home"
            element={
              <Main />
            }
          ></Route>
          <Route
            path="/"
            element={
              <Main />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
