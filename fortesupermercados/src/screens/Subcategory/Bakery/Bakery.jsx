import React, { useState } from 'react';
import './Bakery.css';

const Bakery = ({ products, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Padaria</h1>
      </div>
      <div className="content">
        <div className="sidebar">
          <h2>Subcategoria</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index} onClick={() => handleCategoryClick(category)}>
                {category.name} ({category.count})
              </li>
            ))}
          </ul>
        </div>
        <div className="products">
          {products
            .filter((product) => !selectedCategory || product.category === selectedCategory.name)
            .map((product, index) => (
              <div className="product" key={index}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price.toFixed(2)}</p>
                <div className="quantity">
                  <button onClick={() => product.decreaseQuantity()}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => product.increaseQuantity()}>+</button>
                </div>
                <button className="add-to-cart" onClick={() => product.addToCart()}>
                  Adicionar ao carrinho
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Bakery;
