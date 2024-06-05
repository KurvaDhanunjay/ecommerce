import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const updateCart = (items) => {
    setCartItems(items);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductListing addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} updateCart={updateCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

