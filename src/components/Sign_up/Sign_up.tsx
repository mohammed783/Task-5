import React, { useState } from 'react';
import './sign_up.css';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <img src="/public/assets/logo.png" alt="FocalX Logo" className="logo" />
        <h2>SIGN UP</h2>
        <p>Fill in the following fields to create an account.</p>

        <form>
          <div className="name-fields">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>

          <input type="email" placeholder="Enter your email" required />
          <div className="password-fields">
            <input type="password" placeholder="Enter password" required />
            <input type="password" placeholder="Re-enter your password" required />
          </div>

          <label className="upload-box">
            <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
            <div className="upload-content">
              <span><img src="/public/assets/Upload icon.png" alt="" /></span>
              <p>{profileImage ? profileImage.name : 'Upload Profile Image'}</p>
            </div>
          </label>

          <Link to={'/Dashboard'}> <button type="submit">SIGN UP</button></Link> 
        </form>

        <p className="signin-link">
          Do you have an account? <Link to={'/'}>Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
