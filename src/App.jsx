import { useState } from "react";
import "./App.scss";
import Main from "./containers/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import UserDashboard from "./containers/UserDashboard/UserDashboard";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

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
            path="/userprofile"
            element={<UserDashboard handleInput={handleInput} value={searchTerm} navigateTo="Wallet"/>}
          ></Route>
          <Route
            path="/dashboard"
            element={<UserDashboard handleInput={handleInput} value={searchTerm} navigateTo="Wallet"/>}
          ></Route>
          <Route
            path="/dashboard/wallet"
            element={<UserDashboard handleInput={handleInput} value={searchTerm} navigateTo="Wallet"/>}
          ></Route>
          <Route
            path="/dashboard/liveRates"
            element={<UserDashboard handleInput={handleInput} value={searchTerm} navigateTo="LiveRates"/>}
          ></Route>
          <Route
            path="/dashboard/convert"
            element={<UserDashboard handleInput={handleInput} value={searchTerm} navigateTo="Convert"/>}
          ></Route>
          <Route
            path="/dashboard/transfer"
            element={<UserDashboard handleInput={handleInput} value={searchTerm} navigateTo="Transfer"/>}
          ></Route>
          <Route
            path="/dashboard/contacts"
            element={<UserDashboard handleInput={handleInput} value={searchTerm} navigateTo="Contacts"/>}
          ></Route>
          <Route
            path="/home"
            element={
              <Main />
            }
          ></Route>
          <Route
            path="/features"
            element={
              <Main />
            }
          ></Route>
          <Route
            path="/about"
            element={
              <Main />
            }
          ></Route>
          <Route
            path="/contact"
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
