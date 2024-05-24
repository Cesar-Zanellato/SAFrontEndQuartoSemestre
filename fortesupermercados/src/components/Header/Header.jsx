import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <section className="section_logo">

        <Link to="/">
          <img src="./public/logo_supermercado.png" alt="FORTESUPEMERCADO Logo" />
        </Link>
          
        
      </section>
      <section className="section_input">
        <input className="input_pesquisar" type="text" placeholder="Pesquisar produtos..." />
      </section>
      <section className="section_btns_user">

        <Link to="shop">
         <img className='carrinhoIcon' src="./public/carrinho.png" alt="CARRINHO"/>
        </Link>
        
        <Link className='linkInconUser' to="/profile">
          <img className='usuarioIcon'  src="./public/usuario.png" alt="USUÁRIO"/>
        </Link>

        <Link to= "/login">
          <img className='logoutIcon' src="./public/logout.png" alt="USUÁRIO"/>
        </Link>

         
      </section>
    </header>
  );
}

export default Header;