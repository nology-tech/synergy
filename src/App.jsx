import "./App.scss";
// import LandingMain from "./components/LandingMain/LandingMain";
import Header from "./components/Header/Header";
import features from "./data/feature.js";
import FeaturesTile from "./components/FeaturesTile/FeaturesTile";

const App = () => {
  return (
    <>
      <body>
        <img
          className="navbar__image"
          // scr={landingImage}
          src={require("./assets/images/navbar.png")}
          alt="navbar page image"
        />
        <Header />

        <section>
          <img
            className="landing__image"
            // scr={landingImage}
            src={require("./assets/images/imageMain.png")}
            alt="main page image"
          />
        </section>

        <section>
          <div className="bankClients">
            <h1 className="bankClients__title">Trusted by over 3,000 banks worldwide</h1>
            <div className="bankLogosImg">
              <img
                className="bankLogosImg_one"
                // scr={landingImage}
                src={require("./assets/images/logoipsum.png")}
                alt="main page image"
              />
              <img
                className="bankLogosImg_two"
                // scr={landingImage}
                src={require("./assets/images/logoipsum2.png")}
                alt="main page image"
              />
              <img
                className="bankLogosImg_three"
                // scr={landingImage}
                src={require("./assets/images/logoipsum3.png")}
                alt="main page image"
              />
            </div>
          </div>

          <div className="features">
            <h2>Our Award-Winning Features</h2>
            <FeaturesTile features= {features} />
          </div>
        </section>

        <div className="convertionFXRate">
          <img
            className="fxConvertion"
            // scr={landingImage}
            src={require("./assets/images/fxConvertion.png")}
            alt="FX Convertion"
          />
        </div>
        <div>
          <img
            className="latestRates"
            // scr={landingImage}
            src={require("./assets/images/latestRates.png")}
            alt="latest FX rates"
          />
        </div>
      </body>
      <section>
        <img
          className="footer"
          // scr={landingImage}
          src={require("./assets/images/footer.png")}
          alt="latest FX rates"
        />
      </section>
    </>
  );
};

export default App;
