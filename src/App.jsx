import "./App.scss";
// import LandingMain from "./components/LandingMain/LandingMain";
import Header from "./components/Header/Header";

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
            <h1>Trusted by over 3,000 banks worldwide</h1>
            <div className="bankLogosImg">
            <img
            className="bankClients_one"
            // scr={landingImage}
            src={require("./assets/images/logoipsum.png")}
            alt="main page image"
          />
          <img
            className="bankClients_two"
            // scr={landingImage}
            src={require("./assets/images/logoipsum2.png")}
            alt="main page image"
          />
<img
            className="bankClients_three"
            // scr={landingImage}
            src={require("./assets/images/logoipsum3.png")}
            alt="main page image"
          />
            </div>
          </div>

          <div>
            <h2>Our Award-Winning Features</h2>
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
