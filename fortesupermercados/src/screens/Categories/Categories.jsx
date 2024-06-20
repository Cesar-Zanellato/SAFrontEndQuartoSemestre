import React from 'react';
import './Categories.css';


const Categories = () => {
  return (
    <div className="categories-container">
      <header className="categories-header">
        <h1>Padaria</h1>
      </header>
      <div className="categories-content">
        <aside className="categories-sidebar">
          <div className="categories-subcategories">
            <h2>Subcategoria</h2>
            <ul>
              <li>Assados (34)</li>
              <li>Assados (23)</li>
              <li>Fritos (12)</li>
              <li>Pães (54)</li>
              <li>Bolos (9)</li>
              <li>Doces (65)</li>
            </ul>
          </div>
        </aside>
        <main className="categories-main">
          <div className="categories-products">
            <div className="categories-product">
              <img src="coca_cola.png" alt="Refrigerante Coca Cola 2L" />
              <div className="categories-product-info">
                <p>Refrigerante Coca Cola 2L</p>
                <p>9,99</p>
                <div className="categories-quantity">
                  <button>-</button>
                  <input type="number" value="100g" />
                  <button>+</button>
                </div>
                <button className="categories-add-button">Adicionar</button>
              </div>
            </div>
            <div className="categories-product">
              <img src="coca_cola.png" alt="Pizza Sadia Frango C/ Requeijão Congelada 460g" />
              <div className="categories-product-info">
                <p>Pizza Sadia Frango C/ Requeijão Congelada 460g</p>
                <p>15,97</p>
                <div className="categories-quantity">
                  <button>-</button>
                  <input type="number" value="1" />
                  <button>+</button>
                </div>
                <button className="categories-add-button">Adicionar</button>
              </div>
            </div>
            <div className="categories-product">
              <img src="coca_cola.png" alt="Papel Higiênico Folha Dupla Neutro Toque da Seda Neve 30m Pacote Leve 16 Pague" />
              <div className="categories-product-info">
                <p>Papel Higiênico Folha Dupla Neutro Toque da Seda Neve 30m Pacote Leve 16 Pague</p>
                <p>15,97</p>
                <div className="categories-quantity">
                  <button>-</button>
                  <input type="number" value="1" />
                  <button>+</button>
                </div>
                <button className="categories-add-button">Adicionar no carrinho</button>
              </div>
            </div>
            <div className="categories-product">
              <img src="coca_cola.png" alt="Filtro de Papel 3 Corações 103 30 Unidades" />
              <div className="categories-product-info">
                <p>Filtro de Papel 3 Corações 103 30 Unidades</p>
                <p>15,97</p>
                <div className="categories-quantity">
                  <button>-</button>
                  <input type="number" value="1" />
                  <button>+</button>
                </div>
                <button className="categories-add-button">Adicionar no carrinho</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Categories;
