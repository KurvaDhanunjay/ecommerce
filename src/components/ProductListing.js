import React, { components, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductListing.css';

const products = [
  { id: 1, name: 'Aqua-Marine', price: 4000, image: 'https://plantair.in/wp-content/uploads/2023/06/Aqua-Marine.jpg' },
  { id: 2, name: 'Black-Bloom', price: 3540, image: 'https://plantair.in/wp-content/uploads/2023/06/Black-Bloom.jpg' },
  { id: 3, name: 'Lemon-grass', price: 3000, image: 'https://plantair.in/wp-content/uploads/2023/06/Lemon-grass.jpg' },
  {id: 4,name:'Wireless Pro™ Scent Diffuser', price: 4000, image:'https://aroma360.com/cdn/shop/files/SilverWirelessPro_8367ba55-4d8a-44d1-bfa8-4c52bee574c9_800x.gif?v=1714674821'}
];

function ProductListing({ addToCart }) {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, quantity) => {
    setQuantities({ ...quantities, [id]: quantity });
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addToCart({ ...product, quantity: parseInt(quantity) });
  };

  return (
    <div className='product-listing'>
      <h1>Product Listing</h1>
      {products.map((product) => (
        <div key={product.id} className='product-card'>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <input
            type="number"
            min="1"
            value={quantities[product.id] || 1}
            onChange={(e) => handleQuantityChange(product.id, e.target.value)}
          />
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
      <Link to="/cart" className='cart-link'>Go to Cart</Link>
    </div>
  );
}

export default ProductListing;
