import "./App.scss";
import ContactContainer from "./containers/ContactContainer/ContactContainer";
import NavBar from "../src/assets/images/navbar.png";
import SideBar from "../src/assets/images/sidebar.jpg";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="placeHolder_Sidebar">
          <img src={SideBar} alt="SideBar" />
        </div>
        <div className="right-side">
          <div className="placeHolder_Navbar">
            <img src={NavBar} alt="NavBar" />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <ContactContainer />
              }>
            </Route>
          </Routes>
        </div>
      </div>

    </Router>
  );
};

export default App;
