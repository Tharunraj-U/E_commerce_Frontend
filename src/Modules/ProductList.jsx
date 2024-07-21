import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosInstance'; // Ensure axiosInstance is imported correctly
import axios from 'axios';
import { CartContext } from './CartContext'; // Import CartContext
import Toast from './Toast'; // Import Toast component

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext); // Use addToCart from CartContext
  const [showToast, setShowToast] = useState(false);

  const addToCart1 = (product) => {
    addToCart(product); // Add the product to the cart
    setShowToast(true); // Show the toast notification

    // Hide the toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/product/');
        const productsData = response.data;

        // Fetch images for each product
        const productsWithImages = await Promise.all(productsData.map(async (product) => {
          try {
            const imageResponse = await axios.get(`https://e-commerce-backend-xinh.onrender.com/image/get/${product.id}`, {
              responseType: 'blob',
            });
            const contentType = imageResponse.headers['content-type'];
            const reader = new FileReader();

            return new Promise((resolve) => {
              reader.onloadend = () => {
                const base64String = reader.result;
                product.imageUrl = `data:${contentType};base64,${base64String.split(',')[1]}`;
                resolve(product);
              };
              reader.readAsDataURL(imageResponse.data);
            });
          } catch (error) {
            console.error('Error fetching image for product:', product.id, error);
            product.imageUrl = null; // Or set a default image URL
            return product;
          }
        }));

        setProducts(productsWithImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        // Delete product
        await axiosInstance.delete(`/product/delete/${id}`);
        
        // Optionally, delete associated image (if applicable)
        await axios.delete(`https://e-commerce-backend-xinh.onrender.com/image/delete/${id}`);
        
        // Remove deleted product from state
        setProducts(products.filter(product => product.id !== id));
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className='load-container'>
        <span className='load'>Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <h1 className='heading'>Product List</h1>
      <Link to="/add-product">
        <button className='button1'>Add Product</button>
      </Link>
      <ul className='details'>
        {products.map((product) => (
          <li key={product.id} className="box">
            <Link to={`/product/${product.id}`}>
              {product.imageUrl ? (
                <img src={product.imageUrl} alt={product.name} />
              ) : (
                <div style={{ width: '250px', height: '250px', backgroundColor: '#ccc' }}>No Image</div>
              )}
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </Link>
            <div className="button-group">
              <Link to={`/edit-product/${product.id}`}>
                <button className='edit-btn'>Edit</button>
              </Link>
              <button className='delete' onClick={() => handleDelete(product.id)}>Delete</button>
              <button className='Edit' onClick={() => addToCart1(product)}>Add To Cart</button>
            </div>
          </li>
        ))}
      </ul>
      <Toast message='Product added to cart!' show={showToast} />
    </div>
  );
}

export default ProductList;
