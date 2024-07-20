import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import AddProduct from './Modules/Addproduct';
import NotFound from './Pages/NotFound';
import './Styles/App.css';
import ImageUpload from './Modules/ImageUpload';
import ImageGet from './Modules/ImageGet';

import React, { useState, useEffect } from 'react';
function App() {

  const [imageId, setImageId] = useState(null);

  const handleImageIdChange = (event) => {
      setImageId(event.target.value);
  };
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-product">Add Product</Link>
      </nav>
      <div>
            <h1>Image Upload and Display</h1>
            <ImageUpload />
            <div>
                <h2>Enter Image ID to Display</h2>
                <input type="text" value={imageId} onChange={handleImageIdChange} />
                {imageId && <ImageGet imageId={imageId} />}
            </div>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/add-product" element={<AddProduct />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
