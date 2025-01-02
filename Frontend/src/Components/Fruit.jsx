import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Fruit.css"; // Import the CSS file

export default function Fruit() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/get-fruits/");
        setFruits(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div id="fruit-container">
      <div className="fruit-list">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="fruit-card">
            <img
              src={`http://127.0.0.1:8000${fruit.poster}`}
              alt={fruit.name}
            />
            <h1 className="fruit-name">{fruit.name}</h1>
            <h3 className="fruit-price">${fruit.price}</h3>
            <p className="fruit-stock">{fruit.stock} in stock</p>
          </div>
        ))}
      </div>
    </div>
  );
}
