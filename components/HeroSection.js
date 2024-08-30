import React from 'react';
import './HeroSection.css';
import disasterManagementImage from '../assets/Disaster-Management.jpg'; // Import the image

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src={disasterManagementImage} alt="Disaster Management" className="hero-image" />
      <div className="hero-content">
        <h1>Disaster Management</h1>
        <p>Your safety, our priority. Stay informed, stay safe.</p>
      </div>
    </section>
  );
}

export default HeroSection;
