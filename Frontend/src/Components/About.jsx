import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Fruit.IO</h1>
        <p>At Fruit.IO, we are passionate about delivering the freshest, organic fruits directly from farm to table. Our mission is to make healthy living accessible and enjoyable for everyone.</p>
      </div>

      <div className="about-content">
        <h2>Our Story</h2>
        <p>Fruit.IO started as a small local initiative to support farmers and provide communities with access to fresh fruits. Today, we work with farms across the country, ensuring that every fruit you receive is of the highest quality.</p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>🌱 100% Organic and Fresh</li>
          <li>🚚 Fast and Reliable Delivery</li>
          <li>🍉 Wide Variety of Seasonal Fruits</li>
          <li>💚 Supporting Local Farmers</li>
        </ul>
      </div>

      <div className="about-cta">
        <h2>Join Our Journey!</h2>
        <p>Be part of the Fruit.IO family and start enjoying the freshest fruits today.</p>
        <button className="about-btn">Explore Now</button>
      </div>
    </div>
  );
}
