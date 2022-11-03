import "./App.scss";
import ContactContainer from "./containers/ContactContainer/ContactContainer";
import NavBar from "../src/assets/images/navbar.png";
import SideBar from "../src/assets/images/sidebar.jpg";

const App = () => {
  return (
    <div className="App">
      <div className="placeHolder_Sidebar">
        <img src={SideBar} alt="SideBar" />
      </div>
      <div className="right-side">
        <div className="placeHolder_Navbar">
          <img src={NavBar} alt="NavBar" />
        </div>
        <ContactContainer />
      </div>
    </div>
  );
};

export default App;
