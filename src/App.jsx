import "./App.scss";
// import LandingMain from "./components/LandingMain/LandingMain";
import Header from "./components/Header/Header";
import features from "./data/feature.js";
import FeaturesTile from "./components/FeaturesTile/FeaturesTile";

const App = () => {
  return (
    <>
        <img
          className="navbar__image"
          // scr={landingImage}
          src={require("./assets/images/navbar.png")}
          alt="navbar page image"
        />
        <Header />
        <div className="backgound__image">
        <section>
          <img
            className="landing__image"
            // scr={landingImage}
            src={require("./assets/images/transfer.png")}
            alt="main page image"
          />
        </section>
        </div>

        <section>
          <div className="bankClients">
            <h1 className="bankClients__title">Trusted by over 3,000 banks worldwide</h1>
            <div className="bankLogosImg">
              <img
                className="bankLogosImg__one"
                // scr={landingImage}
                src={require("./assets/images/logoipsum.png")}
                alt="main page image"
              />
              <img
                className="bankLogosImg__two"
                // scr={landingImage}
                src={require("./assets/images/logoipsum2.png")}
                alt="main page image"
              />
              <img
                className="bankLogosImg__three"
                // scr={landingImage}
                src={require("./assets/images/logoipsum3.png")}
                alt="main page image"
              />
            </div>
          </div>

          <div className="features">
            <h2 className="features__title">Our Award-Winning Features</h2>
            <FeaturesTile features= {features} />
            <button>Find Out More</button>
          </div>
        </section>

        <div className="converter">
          <h1 className="converter__title">Make A Conversation </h1>
          <h5 className="converter__subline">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut id fringila
        augue <br /> feugiat. Volutpat tortor ornare lectus praesent amet.
      </h5>
          <img
            className="converter__image"
            // scr={landingImage}
            src={require("./assets/images/converter.png")}
            alt="FX Convertion"
          />
        </div>
        <div className="currencies">
        <h1 className="currencies__title">View Latest Rates </h1>
          <h5 className="currencies__subline">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut id fringila
        augue <br /> feugiat. Volutpat tortor ornare lectus praesent amet.
      </h5>
          <img
            className="currencies__img"
            src={require("./assets/images/currencies.png")}
            alt="latest FX rates"
          />
        </div>
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
