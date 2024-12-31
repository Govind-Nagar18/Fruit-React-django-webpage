import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Fruit.IO</h1>
        <p>Your one-stop destination for fresh, organic, and delicious fruits delivered to your doorstep.</p>
        <button className="explore-btn">Explore Fruits</button>
      </div>

      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="card">
            <img src="/images/freshness.png" alt="Freshness" />
            <h3>Fresh and Organic</h3>
            <p>We source the freshest fruits directly from farms.</p>
          </div>

          <div className="card">
            <img src="/images/variety.png" alt="Variety" />
            <h3>Wide Variety</h3>
            <p>Choose from a wide range of seasonal and exotic fruits.</p>
          </div>

          <div className="card">
            <img src="/images/delivery.png" alt="Delivery" />
            <h3>Fast Delivery</h3>
            <p>Get your fruits delivered within hours, fresh and ready to eat.</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Start Your Healthy Journey Today!</h2>
        <p>Browse through our collection of fruits and add freshness to your life.</p>
        <button className="shop-btn">Shop Now</button>
      </div>
    </div>
  );
}
