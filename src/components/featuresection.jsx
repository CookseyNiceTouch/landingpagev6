import React from 'react';
import Feature from './feature';
import './styles/styles.css';

const FeaturesSection = ({ features = [] }) => {
  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
            imageAlt={feature.imageAlt}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
