// src/AddProduct.tsx
import React, { useState } from 'react';
import './add.css';

const AddProduct: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, price, image });
  };

  return (
    <div className="add-container">
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

      <div className="add-main">
        <button className="back-button">←</button>
        <h1 className="form-title">ADD NEW ITEM</h1>
        <form className="add-form" onSubmit={handleSubmit}>
          <div className="form-left">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter the product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Price</label>
            <input
              type="text"
              placeholder="Enter the product price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-right">
            <label>Image</label>
            <div className="image-upload">
              <label htmlFor="file-upload" className="upload-box">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
                  alt="upload"
                  className="upload-icon"
                />
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </div>
          </div>
        </form>
        <button type="submit" className="save-button" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
