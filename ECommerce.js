import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      name: "Product 3",
      price: 7.99,
      image: "data:image/jpeg;base64,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",
    },
  ]);
  
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <div className="app">
      <header>
        <h1>E-Commerce App</h1>
        <div className="cart">
          <span>Cart ({cart.length})</span>
        </div>
      </header>
      <main>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));