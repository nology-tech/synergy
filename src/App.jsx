import "./App.scss";
import ForgottenPassword from "./components/ForgottenPassword/ForgottenPassword";
import LoginFlowChangePsw from "./components/LoginFlowChangePsw/LoginFlowChangePsw";
import LoginFlowWelcome from "./components/LoginFlowWelcome/LoginFlowWelcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginFlowWelcome />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
        <Route path="/change-password" element={<LoginFlowChangePsw />} />
      </Routes>
    </Router>
  );
};

export default App;
