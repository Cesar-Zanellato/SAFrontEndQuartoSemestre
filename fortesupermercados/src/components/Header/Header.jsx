import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';

function Header() {
  return (
    <header className="header">
      <section className="section_logo">
        <image>
          <img src="./public/logo_supermercado.png" alt="FORTESUPEMERCADO Logo" />
        </image>
      </section>
      <section className="section_input">
        <input className="input_pesquisar" type="text" placeholder="Pesquisar produtos..." />
      </section>
      <section className="section_btns_user">
          <img src="./public/carrinho_compras.png" alt="CARRINHO"/>
          <img src="./public/icone_usuario.png" alt="USUÁRIO"/>
      </section>
    </header>
  );
}

export default Header;