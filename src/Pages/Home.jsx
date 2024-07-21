import React from 'react';
import ProductList from '../Modules/ProductList';

function Home() {
  return (
    <div className="home">
      <h1 className='weclome'>Welcome to Our Store</h1>
      <p>Browse our selection of products and find what you need.</p>
      <ProductList />
    </div>
  );
}

export default Home;
