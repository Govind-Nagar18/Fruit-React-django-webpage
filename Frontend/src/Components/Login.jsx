import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    e.target.reset()
  };

  return (
    <div className="login-container" id="login-container">
      <form className="login-form" id="login-form" onSubmit={handleSubmit}>
        <h2 className="login-heading" id="login-heading">Login</h2>
        <div className="input-group" id="input-group-email">
          <label htmlFor="email" className="input-label" id="email-label">Email:</label>
          <input
            type="email"
            id="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group" id="input-group-password">
          <label htmlFor="password" className="input-label" id="password-label">Password:</label>
          <input
            type="password"
            id="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button" id="login-button">Login</button>
      </form>
    </div>
  );
}
