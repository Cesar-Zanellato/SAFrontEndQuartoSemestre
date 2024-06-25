import './Home.css'
import CardProduto from '../../components/CardProduto/CardProduto.jsx'
import { useState, useEffect, useContext } from 'react';
import { UsuariosContext } from '../../contexts/GlobalContext.jsx';
import api from '../../api/api.jsx';
import { useNavigate } from 'react-router-dom';


function Home() {
  const [usuarioLogado, setUsuarioLogado] = useContext(UsuariosContext);
  const navigate = useNavigate()
  
  useEffect(() => {
    console.log("ssssss"+ usuarioLogado)
    if(usuarioLogado == null ){
      alert("Ele é nulo")
      navigate("/login")
    }


}, []);

  return (
    <>
      <div className='divCarrossel'>

        <img src="carrossel.png" alt="" />

      </div>

      <h1 className='textMaisVendidos'>Mais Vendidos</h1>

      <div className='divForaMaisVendidos'>

        <div className='divDentroMaisVendidos'>

          <CardProduto></CardProduto>

          <div className='divProduto'>

          </div>

          <div className='divProduto'>

          </div>

          <div className='divProduto'>

          </div>

          <div className='divProduto'>

          </div>



        </div>

      </div>
    </>



  )
}

export default Home
