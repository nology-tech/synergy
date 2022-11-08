import React from 'react'
import "./FeatureCard.scss";

const FeatureCard = (props) => {
  const {
    feature_id,
    feature_name,
    feature_description,
    // feature_image, -- this will needed when get to the API
    feature_tagline,
  } = props;

  return (
    <>
    <div className="feature-card" key={feature_id}>
      <div className="feature-card__img">
     
        <img
          src={require("../../assets/images/feature.png")}
          alt={feature_tagline}
        />
      </div>
      <h3 className="feature-card__heading">{feature_name}</h3>
      <p className="feature-card__desc">{feature_description}</p>
    </div>
  </>
  )
}

export default FeatureCard
