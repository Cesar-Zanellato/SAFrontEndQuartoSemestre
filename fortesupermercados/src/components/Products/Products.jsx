import React from 'react';
import './Products.css';

let produtos =[
  {
    name: "Cesar",
    price: 10,
    
  } 
]

function Products({ products }) {
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>R$ {product.price.toFixed(2)}</p>
          <div className="quantity-control">
            <button>-</button>
            <input type="number" value={product.quantity} readOnly />
            <button>+</button>
          </div>
          <button className="add-to-cart">Adicionar ao Carrinho</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
