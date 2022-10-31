import "./App.scss";
// import LandingMain from "./components/LandingMain/LandingMain";
import Header from "./components/Header/Header";
import landingImage from "./assets/images/landingPageMain.jpg";


const App = () => {
  return (
    <div>
      {/* <LandingMain/> */}
      <Header />
      <img
        className="landing__image"
        scr={landingImage}
        alt="main page image"
      />
    </div>
  );
};

export default App;
