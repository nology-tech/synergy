import React from 'react'
import './MainImage.scss'

const MainImage = () => {
  return (
    <div className="backgound__image">
    <img
      className="landing__image"
      src={require("../../assets/images/transfer.png")}
      alt="main page image"
    />
  </div>
  )
}

export default MainImage