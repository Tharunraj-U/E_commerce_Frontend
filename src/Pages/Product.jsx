// Product.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Product.css'; // Import the CSS file

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://e-commerce-backend-uwpw.onrender.com/product/${id}`);
        setProduct(response.data);
        fetchImage(response.data.imageId);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    const fetchImage = async (imageId) => {
      try {
        const imageResponse = await axios.get(`https://e-commerce-backend-uwpw.onrender.com/image/get/${id}`, {
          responseType: 'blob',
        });

        const contentType = imageResponse.headers['content-type'];
        const reader = new FileReader();

        reader.onloadend = () => {
          const base64String = reader.result;
          setImage(`data:${contentType};base64,${base64String.split(',')[1]}`);
          setLoading(false);
        };

        reader.readAsDataURL(imageResponse.data);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error loading product details: {error.message}</div>;
  }

  return (
    <div className="product-container">
      <div className="product-image">
        {image ? (
          <img src={image} alt={product.name} />
        ) : (
          <div className="loading-image">Loading image...</div>
        )}
      </div>
      <div className="product-details">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        <button className="buy-button" onClick={() => window.location.href = `/checkout/${id}`}>Buy</button>
      </div>
    </div>
  );
};

export default Product;
