import React from 'react'
// import Header from "./components/Header/Header";
// import landingImage from "../../assets/images/landingPageMain.png"

const LandingMain = () => {
  return (
    <div>
       <Header/>
    <img
    className='landing__image'
    scr = {landingImage}
    alt= "currebcy image"    
    />

    </div>
  )
}

export default LandingMain