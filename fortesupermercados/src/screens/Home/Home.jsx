import './Home.css'
import CardProduto from '../../components/CardProduto/CardProduto.jsx'
import { useState, useEffect, useContext, useRef } from 'react';
import { UsuariosContext } from '../../contexts/GlobalContext.jsx';
import api from '../../api/api.jsx';
import { useNavigate } from 'react-router-dom';
import CardProduto2 from '../../components/CardProduto2/CardProduto2.jsx';


function Home() {
  const [usuarioLogado, setUsuarioLogado] = useContext(UsuariosContext);
  const navigate = useNavigate()
  const carrossel = useRef(null);
  const carrossel2 = useRef(null);

  const hendleLeftClick = (e) => {

    e.preventDefault();
    console.log(carrossel.current.offsetWidth)
    carrossel.current.scrollLeft += carrossel.current.offsetWidth
  }

  const hendleReftClick = (e) => {
    e.preventDefault();
    console.log(carrossel.current.offsetWidth)
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth
  }


  const hendleLeftClick2 = (e) => {

    e.preventDefault();
    console.log(carrossel2.current.offsetWidth)
    carrossel2.current.scrollLeft += carrossel2.current.offsetWidth
  }

  const hendleReftClick2 = (e) => {
    e.preventDefault();
    console.log(carrossel2.current.offsetWidth)
    carrossel2.current.scrollLeft -= carrossel2.current.offsetWidth
  }


  return (
    <>
      <div className='divCarrossel'>

        <img src="carrossel.png" alt="" />

      </div>

      <h1 className='textMaisVendidos'>Mais Vendidos</h1>

          <body className='body'>
          <button onClick={hendleReftClick}><img className='setaEsquerda' src="./public/seta.png" alt="" /></button>
                <div className='containerCarrossel'>

                  <div className='divCarrosselMaisVendidos'>

                    <div className='carrossel' ref={carrossel}>

                      <CardProduto></CardProduto>

                    </div>

                  </div>
                </div>
                <button onClick={hendleLeftClick}><img className='setaDireita' src="./public/seta.png" alt=""/></button>
          </body>


          <h1 className='textMaisVendidos'>Promossões</h1>

          <body className='body'>
          <button onClick={hendleReftClick2}><img className='setaEsquerda' src="./public/seta.png" alt="" /></button>
                <div className='containerCarrossel'>

                  <div className='divCarrosselMaisVendidos'>

                    <div className='carrossel' ref={carrossel2}>

                      <CardProduto2></CardProduto2>

                    </div>

                  </div>
                </div>
                <button onClick={hendleLeftClick2}><img className='setaDireita' src="./public/seta.png" alt=""/></button>
          </body>
          





    </>



  )
}

export default Home
