// src/ProductDetails.tsx
import React from 'react';
import './Show.css';

const ProductDetails: React.FC = () => {
  return (
    <div className="details-container">
      <div className="sidebar">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="user"
          className="profile-img"
        />
        <h5>Mohammed Alkordy</h5>
        <button className="sidebar-button active">Products</button>
        <div className="nav-item">Favorites</div>
        <div className="nav-item">order list</div>
        <div className="logout">Logout</div>
      </div>

      <div className="main">
        <button className="back-button">←</button>
        <h1 className="product-title">Iphone X</h1>
        <img
          src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg"
          alt="iPhone X"
          className="product-image"
        />
        <div className="product-info">
          <div><strong>Price:</strong> <span className="light">200$</span></div>
          <div><strong>Added At:</strong> <span className="light">30/12/2020</span></div>
        </div>
        <div className="updated-info">
          <strong>Updated At:</strong> <span className="light">30/12/2020</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
