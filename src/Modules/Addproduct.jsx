import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload image first
      const imageFormData = new FormData();
      imageFormData.append('file', product.image); // Ensure the part name is 'file'
      const imageResponse = await axios.post('https://e-commerce-backend-uwpw.onrender.com/image/save', imageFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Get image URL or ID from response
      const imageUrl = imageResponse.data.imageUrl;

      // Send product data with image URL
      const productData = {
        name: product.name,
        description: product.description,
        price: parseFloat(product.price),
        imageUrl: imageUrl,
      };

      await axios.post('https://e-commerce-backend-uwpw.onrender.com/product/save', productData);

      navigate('/');
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle error, e.g., show error message to user
    }
  };

  return (
    <div className="container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className=''>Image:</label>
          <input className='imgdetails'
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*" // Limit file type to images
            required
          />
        </div>
        <button type="submit">Add Product</button>
        
      </form>
    </div>
  );
}

export default AddProduct;
