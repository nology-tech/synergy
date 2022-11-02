import "./App.scss";
import LiveRates from "./components/LiveRates/LiveRates";
import sidebar from "./assets/images/sidebar3.jpg";
import navbar from "./assets/images/navbar.png";

const App = () => {
  return (
    <div className="liveRates">
      {/* <h1>Synergy</h1> */}
      <img 
        className="liveRates__sidebar" 
        src={sidebar} 
        alt="Synergy" 
      />
    

      <div className="liveRates__section">
        <img 
          className="liveRates__navbar" 
          src={navbar} 
          alt="" 
        />
        <LiveRates className="liveRates__main" />
      </div>
    </div>
  )
}

export default App