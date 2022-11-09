import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import './FeaturesTile.scss';

const FeaturesTile = (props) => {
  const { features } = props;

  const featuresJSX = features.map((feature) => (
    <FeatureCard
      feature_id={feature.id}
      feature_name={feature.name}
      feature_description={feature.description}
      feature_image={feature.img_src}
      feature_tagline={feature.tagline}
    />
  ));

  return <div className="features-list">{featuresJSX}</div>;
};

export default FeaturesTile;
