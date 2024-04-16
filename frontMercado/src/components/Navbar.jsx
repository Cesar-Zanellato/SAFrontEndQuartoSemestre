import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#alimentos">Alimentos Básicos</a>
      <a href="#bebidas">Bebidas</a>
      <a href="#matinais">Matinais</a>
      <a href="#higiene">Higiene Pessoal</a>
      <a href="#limpeza">Limpeza</a>
      <a href="#padaria">Padaria</a>
      <a href="#hortifruti">Hortifruti</a>
      <a href="#acougue">Açougue</a>
    </nav>
  );
}

export default Navbar;
