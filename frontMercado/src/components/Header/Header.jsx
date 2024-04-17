import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Supermarket Logo" />
      </div>
      <input className="search-input" type="text" placeholder="Pesquisar produtos..." />
      <div className="user-controls">
        <button className="button">Minha Conta</button>
        <button className="button">Carrinho</button>
      </div>
    </header>
  );
}

export default Header;
