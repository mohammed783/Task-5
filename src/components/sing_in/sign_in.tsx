import React from 'react';
import './sign_in.css';
import { Link } from 'react-router-dom';
import sing_up from '../../pages/sing_up';

const SignIn: React.FC = () => {
  return (
    <div className="signin-container">
      <div className="signin-card">
        <div className="logo">
          <img src="../../../public/assets/logo.png" alt="logo" />
        </div>
        <h2>SIGN IN</h2>
        <p>Enter your credentials to access your account</p>

        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          <button type="submit">SIGN IN</button>
        </form>

        <p className="signup-link">
          Don’t have an account? <Link to={'/Sign_up'}>Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
