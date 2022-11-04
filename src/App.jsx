import "./App.scss";
import React from "react";
import LiveRates from "./components/LiveRates/LiveRates";
import sidebar from "./assets/images/sidebar3.jpg";
import navbar from "./assets/images/topnav.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return ( 
    <Router>
    
    <div className="app">
      {/* <h1>Synergy</h1> */}
      <img  
        src={sidebar} 
        alt="Synergy" 
      />
    

      <div>
        <img 
          src={navbar} 
          alt="" 
        />
        <Routes>
        <Route path="/liverates" element={<LiveRates />} />

        {/* <Route path="/albums/:albumId" element={<AlbumInfo albumsArr={filteredAlbums} />} /> */}
        </Routes>
      </div>
     
    </div>
    </Router>
  )
}

export default App