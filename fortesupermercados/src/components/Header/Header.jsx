import React, {useContext} from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { UsuariosContext } from '../../contexts/GlobalContext';



function Header() {
  const { usuarioLogado, setUsuarioLogado } = useContext(UsuariosContext);
  const token = localStorage.getItem("token")
 
  const navigate = useNavigate()

  function logout(){
    localStorage.clear()
    navigate("/login")
  }

  function cadastrarLogar(){
    navigate("/login")
  }


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

        {/* <label htmlFor="">{!!usuarioLogado && }</label> */}
        {usuarioLogado}
        <Link to="shop">
         <img className='carrinhoIcon' src="./public/carrinho.png" alt="CARRINHO"/>
        </Link>
        
        {token != null &&<Link  className='linkInconUser' to="/profile">
          <img className='usuarioIcon'  src="./public/usuario.png" alt="USUÁRIO"/>
        </Link>}
        

        {token != null ? <div onClick={logout}>
          <img className='logoutIcon' src="./public/logout.png" alt="USUÁRIO"/>
        </div>: ""}

        
        {token == null && <p onClick={cadastrarLogar} className='registrarText'>Entre ou Cadastre-se</p>}
        


      </section>
    </header>
  );
}

export default Header;