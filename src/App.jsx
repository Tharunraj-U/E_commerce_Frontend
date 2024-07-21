import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import AddProduct from './Modules/Addproduct';
import NotFound from './Pages/NotFound';
import './Styles/App.css';
import React, { useState } from 'react';
import About from './Pages/About';
import ProductList from './Modules/ProductList';
import Cart from './Pages/Cart'; // Assuming you have a Cart component
import { CartProvider } from './Modules/CartContext';
import Checkout from './Modules/Checkout';
import Footer from './Pages/Footer';
function App() {
  const [imageId, setImageId] = useState(null);

  const handleImageIdChange = (event) => {
    setImageId(event.target.value);
  };

  return (
    <CartProvider>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-product">Add Product</Link>
          <Link to="/product-list">Product List</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/checkout/:id" element={<Checkout />} />
        </Routes>
      
      </div>
      <Footer />
    </CartProvider>
  );
}

export default App;
