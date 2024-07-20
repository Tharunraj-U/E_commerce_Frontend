import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/products/');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axiosInstance.delete(`/products/${productId}`);
        // After deleting, fetch updated product list
        const response = await axiosInstance.get('/api/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <Link to="/add-product">
        <button>Add Product</button>
      </Link>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.imageUrl} alt={product.name} style={{ width: '100px', height: '100px' }} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </Link>
            <div>
              <Link to={`/edit-product/${product.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
